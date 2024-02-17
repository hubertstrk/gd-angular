import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { SearchComponent } from './search/search.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { ResultComponent } from './result/result.component'
import { AutoFocusModule } from 'primeng/autofocus'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { RadioButtonModule } from 'primeng/radiobutton'
import { SelectButtonModule } from 'primeng/selectbutton'
import { TableModule } from 'primeng/table'

import { SettingsComponent } from './settings/settings.component'
import { AppRoutingModule } from './app-routing.module'
import { MainComponent } from './main/main.component'
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [AppComponent, SearchComponent, ResultComponent, SettingsComponent, MainComponent, AboutComponent],
  imports: [
    AutoFocusModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    RadioButtonModule,
    InputTextModule,
    SelectButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
