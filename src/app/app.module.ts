import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HexagonComponent } from './hexagon/hexagon.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import { AwardListComponent } from './award-list/award-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { DescriptionTruncatePipe } from './filter/description-truncate.pipe';
import { CreateAwardComponent } from './create-award/create-award.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SlideshowComponent } from './slideshow/slideshow.component';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
