import { Component, OnInit } from '@angular/core'
import { Translation } from './models'
import { TranslationService } from './translation.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  title = 'gd-angular'
  text = ''
  translations: Translation[] = []
  selectedLanguage = 'de'

  onTextChanged(text: string) {
    this.text = text
  }

  onSettingsChanged(selectedLanguage: string) {
    this.selectedLanguage = selectedLanguage
    this.text = ''
  }

  readTranslations(data: string): Translation[] {
    return data.split('\n').reduce((acc: Translation[], curr: string) => {
      const parts = curr.split(';')
      if (parts.length === 2) acc.push({ de: parts[0], en: parts[1] })
      return acc
    }, [])
  }

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe((data: string) => {
      this.translations = this.readTranslations(data)
    })
  }
}
