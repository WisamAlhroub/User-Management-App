import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { UsersPageComponent } from './Components/users-page/users-page.component';
import { AddEditComponent } from './Components/users-page/add-edit/add-edit.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AboutUsPageComponent } from './Components/about-us-page/about-us-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersPageComponent,
    AddEditComponent,
    NavBarComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
