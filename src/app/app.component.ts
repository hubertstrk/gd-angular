import { Component, OnInit } from '@angular/core'
import { Translation, DisplayTranslation } from './models'
import { TranslationService } from './translation.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  title = 'gd-angular'
  searchText = ''
  translations: Translation[] = []
  selectedLanguage = 'de'
  minCharacter = 2

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe((data: string) => {
      this.translations = this.readTranslations(data)
    })
  }

  onTextChanged(searchText: string) {
    this.searchText = searchText
  }

  onSettingsChanged(selectedLanguage: string) {
    this.selectedLanguage = selectedLanguage
    this.searchText = ''
  }

  readTranslations(data: string): Translation[] {
    return data.split('\n').reduce((acc: Translation[], curr: string) => {
      const parts = curr.split(';')
      if (parts.length === 2) acc.push({ de: parts[0], en: parts[1] })
      return acc
    }, [])
  }

  get hasMinimumCharacters() {
    return this.searchText.length > this.minCharacter
  }

  get found(): DisplayTranslation[] {
    const key = this.selectedLanguage as keyof Translation
    const found = this.hasMinimumCharacters
      ? this.translations.filter((x) => x[key].toLowerCase().includes(this.searchText.toLowerCase()))
      : []

    return found.map((x) => ({ primary: x[key], subsidiary: x[key === 'de' ? 'en' : 'de'] }))
  }
}
