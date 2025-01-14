import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllBorrowersComponent } from './pages/view-all-borrowers/view-all-borrowers.component';
import { AboutComponent } from './pages/about/about.component';
import { OfferBooksComponent } from './pages/offer-books/offer-books.component';
import { OfferHistoryComponent } from './pages/offer-history/offer-history.component';

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
  },

  {
    path: "view-all-borrowers",
    component: ViewAllBorrowersComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"offer-book",
    component: OfferBooksComponent
  },
  {
    path:"offer-history",
    component:OfferHistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
