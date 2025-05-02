import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'benefits', component: BenefitsComponent },
{ path: 'registration-form', component: RegistrationFormComponent },
{ path: 'Welcome', component: WelcomeComponent }
];
