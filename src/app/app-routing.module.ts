import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsPageComponent } from './Components/about-us-page/about-us-page.component';
import { AddEditComponent } from './Components/add-edit/add-edit.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { UsersPageComponent } from './Components/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'about-us', component: AboutUsPageComponent },
      { path: 'users', component: UsersPageComponent },
      { path: 'add-edit/:id', component: AddEditComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
