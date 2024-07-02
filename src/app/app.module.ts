import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterLink } from '@angular/router';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllBorrowersComponent } from './pages/view-all-borrowers/view-all-borrowers.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewAllBooksComponent,
    LoginComponent,
    RegisterFormComponent,
    HomeComponent,
    ViewAllBorrowersComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterLink
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
