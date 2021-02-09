import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { TwoComponent } from './two/two.component';
import { AreaCheckComponent } from './area-check/area-check.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'two', component: TwoComponent },
  { path: 'check', component: AreaCheckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
