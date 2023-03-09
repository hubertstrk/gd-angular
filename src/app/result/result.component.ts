import { Component, Input } from '@angular/core';
import  {Translation} from '../models'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() searchText = ''
  @Input() translations: Translation[] = []

  get filtered() {
    return this.translations
      .filter(x => x.german.includes(this.searchText))
  }
}
