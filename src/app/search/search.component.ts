import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchText = ''
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>()

  onValueChanged(text: string) {
    this.searchText = text
    this.textChange.emit(text)
  }
}
