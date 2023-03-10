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

  readTranslations (text: string): Translation[] {
    return text.split('\n').reduce((acc: Translation[], curr: string) => {
      var parts = curr.split(';')
      acc.push({ german: parts[0], english: parts[1] })
      return acc
    }, [])
  }

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe((text: string) => {
      this.translations = this.readTranslations(text)
    })
  }
}
