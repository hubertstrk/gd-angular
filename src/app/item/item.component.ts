import { Component, Input } from '@angular/core'
import { Translation } from '../models'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() searchText = ''
  @Input() translation: Translation | null = null
  @Input() selectedLanguage = 'de'

  get formatted() {
    if (!this.translation || !this.selectedLanguage) return null

    const primary = this.translation[this.selectedLanguage as keyof Translation].toLowerCase()

    const index = primary.toLowerCase().indexOf(this.searchText.toLowerCase())
    if (index === -1) return null

    const pre = primary.toLowerCase().slice(0, index)
    const match = primary.toLowerCase().slice(index, index + this.searchText.toLowerCase().length)
    const post = primary.toLowerCase().slice(index + this.searchText.toLowerCase().length)

    return {
      pre,
      match,
      post,
      value: this.selectedLanguage === 'de' ? this.translation?.en : this.translation?.de,
    }
  }
}
