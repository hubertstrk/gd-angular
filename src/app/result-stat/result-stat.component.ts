import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-stat',
  templateUrl: './result-stat.component.html',
  styleUrls: ['./result-stat.component.scss']
})
export class ResultStatComponent {
  @Input() length: number = 0
  @Input() found: number = 0

  get foundMessage () {
    return `Found ${this.found} translations`
  }
}
