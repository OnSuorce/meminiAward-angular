import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HexagonComponent } from './components/hexagon/hexagon.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import { AwardListComponent } from './components/award-list/award-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { DescriptionTruncatePipe } from './components/filter/description-truncate.pipe';
import { CreateAwardComponent } from './components/create-award/create-award.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ForbiddenInterceptorInterceptor} from "./interceptor/forbidden-interceptor.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HexagonComponent,
    NavbarComponent,
    AwardListComponent,
    DescriptionTruncatePipe,
    CreateAwardComponent,
    SlideshowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatTooltipModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ForbiddenInterceptorInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
