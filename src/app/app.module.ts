import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { SearchComponent } from './search/search.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { ResultComponent } from './result/result.component'
import { ResultStatComponent } from './result-stat/result-stat.component'
import { MatTableModule } from '@angular/material/table'
import { MatChipsModule } from '@angular/material/chips'
import { ItemComponent } from './item/item.component'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [AppComponent, SearchComponent, ResultComponent, ResultStatComponent, ItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatChipsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
