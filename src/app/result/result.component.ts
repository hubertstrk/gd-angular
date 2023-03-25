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

  displayedColumns: string[] = ['german', 'english']

  get filtered() {
    const foo = this.searchText.length >= 2 ? this.translations.filter((x) => x.german.includes(this.searchText)) : []
    console.log(foo)
    return foo
  }

  get translationsFoundMessage(): string {
    return `Found ${this.filtered.length} translations`
  }
}
