import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Noticia {
  id: number;
  titulo: string;
  fecha: Date;
  resumen: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  // Lista de noticias de ejemplo
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Lanzamiento de nueva app móvil',
      fecha: new Date('2025-04-28'),
      resumen: 'Presentamos nuestra aplicación móvil con funcionalidades avanzadas para el monitoreo de tu flotilla.'
    },
    {
      id: 2,
      titulo: 'Actualización de servicios en línea',
      fecha: new Date('2025-04-25'),
      resumen: 'Mejoras en la plataforma web para gestionar órdenes de servicio de forma más ágil.'
    },
    {
      id: 3,
      titulo: 'Convenio con proveedor internacional',
      fecha: new Date('2025-04-20'),
      resumen: 'Firmamos alianza estratégica para importar repuestos de la más alta calidad.'
    },
    {
      id: 4,
      titulo: 'Charla técnica sobre diésel limpio',
      fecha: new Date('2025-04-15'),
      resumen: 'Evento gratuito dirigido a técnicos y gerentes de mantenimiento.'
    }
  ];

  // Devuelve las tres noticias más recientes, ordenadas de mayor a menor fecha
  get recientes(): Noticia[] {
    return this.noticias
      .sort((a, b) => b.fecha.getTime() - a.fecha.getTime())
      .slice(0, 3);
  }
}
