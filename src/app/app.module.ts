import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { SearchComponent } from './search/search.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { ResultComponent } from './result/result.component';
import { ResultStatComponent } from './result-stat/result-stat.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    ResultStatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
