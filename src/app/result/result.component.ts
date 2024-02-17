import { Component, Input } from '@angular/core'
import { DisplayTranslation } from '../models'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  @Input() translations: DisplayTranslation[] = []
  @Input() language = 'de'

  get sortedTranslations() {
    return this.translations.sort((a, b) => a.primary.localeCompare(b.primary))
  }
}
