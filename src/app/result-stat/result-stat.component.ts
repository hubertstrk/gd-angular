import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-result-stat',
  templateUrl: './result-stat.component.html',
  styleUrls: ['./result-stat.component.scss'],
})
export class ResultStatComponent {
  @Input() found = 0
  @Input() searchText = ''
}
