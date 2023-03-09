import { Component } from '@angular/core'
import {Translation} from './models'
import {TranslationService} from './translation.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translationService: TranslationService) {}

  title = 'gd-angular'
  searchText: string = ''
  translations : Translation[] = []

  onChanged(text: string) {
    this.searchText = text
  }

  ngOnInit(): void {
    const result = this.translationService.loadTranslations()
  }
}
