import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsComponent } from '../benefits/benefits.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, BenefitsComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  introduccion: string = `
    Bienvenido a COONADOC.
    Somos una cooperativa dedicada a brindar soluciones confiables
    y de calidad para el sector diésel.
    Nuestro objetivo es acompañarte en el mantenimiento y reparación
    de tu flotilla con tecnología de punta.
  `;
}

