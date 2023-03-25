import { Component, Input } from '@angular/core'
import { Translation } from '../models'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  @Input() searchText = ''
  @Input() translations: Translation[] = []
  @Input() selectedLanguage = 'de'

  minCharacter = 2

  get hasMinimumCharacters() {
    return this.searchText.length > this.minCharacter
  }

  get filtered() {
    const key = this.selectedLanguage as keyof Translation
    return this.hasMinimumCharacters
      ? this.translations.filter((x) => x[key].toLowerCase().includes(this.searchText.toLowerCase()))
      : []
  }

  get translationsFoundMessage(): string {
    return `Found ${this.filtered.length} translations`
  }
}
