import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

export const Routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
