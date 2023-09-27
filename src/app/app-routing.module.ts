import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AwardListComponent} from "./components/award-list/award-list.component";
import {CreateAwardComponent} from "./components/create-award/create-award.component";
import {SlideshowComponent} from "./components/slideshow/slideshow.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'award-list', component: AwardListComponent },
  { path: 'award-create', component: CreateAwardComponent },
  { path: 'vote', component: SlideshowComponent },
  { path: 'login', component: LoginComponent},
  { path: '', pathMatch: "full", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
