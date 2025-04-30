import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      icon: 'assets/icons/calidad.svg',
      title: 'Calidad garantizada',
      description: 'Procesos certificados que aseguran la excelencia en cada servicio.'
    },
    {
      icon: 'assets/icons/soporte.svg',
      title: 'Soporte 24/7',
      description: 'Atención permanente para resolver incidencias de forma inmediata.'
    },
    {
      icon: 'assets/icons/ahorro.svg',
      title: 'Ahorro de costos',
      description: 'Mantenimiento preventivo que reduce gastos imprevistos en tu flotilla.'
    }
  ];
}
