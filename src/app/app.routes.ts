import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasDetailComponent } from './noticias-detail/noticias-detail.component';

export const routes: Routes = [
  // Ruta raíz: muestra la introducción
{ path: '', component: HomeComponent },

  // Sección de noticias: lista las tres más recientes
{ path: 'noticias', component: NoticiasComponent },

  // Detalle de una noticia concreta, según su ID
{ path: 'noticias/:id', component: NoticiasDetailComponent }
];
