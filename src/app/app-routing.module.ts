import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"view-all-books",
    component: ViewAllBooksComponent
  },
  {
    path:"registerForm",
    component:RegisterFormComponent
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }