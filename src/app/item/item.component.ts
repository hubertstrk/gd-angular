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

  get match() {
    if (!this.translation) return null
    const index = this.translation.german.indexOf(this.searchText)
    if (index === -1) return null

    const pre = this.translation.german.slice(0, index)
    const match = this.translation.german.slice(index, index + this.searchText.length)
    const post = this.translation.german.slice(index + this.searchText.length)

    return { pre, match, post }
  }
}
