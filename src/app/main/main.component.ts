import { Component, OnInit } from '@angular/core'
import { TranslationService } from '../translation.service'
import { DisplayTranslation, Translation } from '../models'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

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
    const key = <keyof Translation>this.selectedLanguage
    const found = this.translations.reduce((acc: DisplayTranslation[], curr: Translation) => {
      if (this.hasMinimumCharacters && curr[key].toLowerCase().includes(this.searchText.toLowerCase())) {
        const index = curr[key].toLowerCase().indexOf(this.searchText.toLowerCase())
        const a = curr[key].slice(0, index)
        const b = curr[key].slice(index, index + this.searchText.length)
        const c = curr[key].slice(index + this.searchText.length)

        acc.push({ index, a, b, c, primary: curr[key], subsidiary: curr[key === 'de' ? 'en' : 'de'] })
      }

      return acc
    }, [])

    return found.filter((x) => x.index === 0).concat(found.filter((x) => x.index > 0))
  }
}
