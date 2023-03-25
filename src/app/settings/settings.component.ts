import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() changed = new EventEmitter<string>()

  selectedLanguage = 'de'

  onChanged(option: string) {
    this.changed.emit(option)
  }
}
