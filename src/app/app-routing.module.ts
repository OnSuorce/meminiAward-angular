import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AwardListComponent} from "./award-list/award-list.component";
import {CreateAwardComponent} from "./create-award/create-award.component";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'award-list', component: AwardListComponent },
  { path: 'award-create', component: CreateAwardComponent },
  { path: 'vote', component: SlideshowComponent },
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: "full", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
