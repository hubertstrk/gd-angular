import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gd-angular'
  searchText = ''
  
  onChanged(text: string) {
    this.searchText = text
  }
}
