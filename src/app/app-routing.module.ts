import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BooknowComponent } from './booknow/booknow.component';
import { BooksalonComponent } from './booksalon/booksalon.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  { path: 'booknow', component: BooknowComponent },
  {
    path: 'forget', component: ForgetpasswordComponent
  },
  {
    path: 'booksalon', component: BooksalonComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: "full"
  },
  {
    path: '**', component: PagenotfoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
