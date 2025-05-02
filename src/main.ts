import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { RegistrationFormComponent } from './app/registration-form/registration-form.component';
import { BenefitsComponent } from './app/benefits/benefits.component';
import { WelcomeComponent } from './app/welcome/welcome.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    provideRouter([
      {
        path: '',
        component: HomeComponent,
        children: [
          { path: '', redirectTo: 'registration-form', pathMatch: 'full' },  // o a la que sea tu “landing” interna
          { path: 'registration-form', component: RegistrationFormComponent },
          { path: 'benefits',          component: BenefitsComponent },
          { path: 'Welcome',          component: WelcomeComponent },
        ]
      },
      { path: '**', redirectTo: '' }
    ])
  ]
}).catch(err => console.error(err));

