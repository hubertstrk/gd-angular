import { NgModule } from '@angular/core'
import { MainComponent } from './main/main.component'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
