import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { SearchComponent } from './search/search.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { ResultComponent } from './result/result.component'
import { ResultStatComponent } from './result-stat/result-stat.component'
import { ItemComponent } from './item/item.component'
import { AutoFocusModule } from 'primeng/autofocus'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { RadioButtonModule } from 'primeng/radiobutton'
import { SelectButtonModule } from 'primeng/selectbutton'
import { CardModule } from 'primeng/card'
import { PanelModule } from 'primeng/panel'

import { SettingsComponent } from './settings/settings.component'

@NgModule({
  declarations: [AppComponent, SearchComponent, ResultComponent, ResultStatComponent, ItemComponent, SettingsComponent],
  imports: [
    AutoFocusModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    RadioButtonModule,
    CardModule,
    InputTextModule,
    PanelModule,
    SelectButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
