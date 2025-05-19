import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';         // Elementos básicos de Angular para crear componentes.
import { FormsModule } from '@angular/forms';

interface Formato {
  id: number;
  nombre: string;                             //Define la estructura de cada formato documental.
  categoria: string;
  descripcion: string;
  pdfUrl: string;
  docxUrl: string;
  fechaActualizacion: Date;
}

@Component({
  selector: 'app-docs-formats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './docs-formats.component.html',
  styleUrl: './docs-formats.component.css'
})
export class DocsFormatsComponent implements OnInit {
  formatos: Formato[] = [];
  formatosFiltrados: Formato[] = [];
  categorias: string[] = [];
  busqueda: string = '';
  categoriaSeleccionada: string = 'Todas';
  windowWidth: number = window.innerWidth;

  ngOnInit(): void {
    this.cargarFormatos();
    this.extractCategorias();
    
    
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  }

  cargarFormatos(): void {
    // Simulamos datos de ejemplo servicio
    this.formatos = [
      {
        id: 1,
        nombre: 'Solicitud de vacaciones',
        categoria: 'Recursos Humanos',
        descripcion: 'Formato para solicitar período vacacional',
        pdfUrl: 'assets/formatos/solicitud-vacaciones.pdf',
        docxUrl: 'assets/formatos/solicitud-vacaciones.docx',
        fechaActualizacion: new Date('2023-12-15')
      },
      {
        id: 2,
        nombre: 'Reporte de gastos',
        categoria: 'Finanzas',
        descripcion: 'Formato para reportar gastos mensuales',
        pdfUrl: 'assets/formatos/reporte-gastos.pdf',
        docxUrl: 'assets/formatos/reporte-gastos.docx',
        fechaActualizacion: new Date('2024-01-10')
      },
      {
        id: 3,
        nombre: 'Solicitud de compra',
        categoria: 'Compras',
        descripcion: 'Formulario para nuevas adquisiciones',
        pdfUrl: 'assets/formatos/solicitud-compra.pdf',
        docxUrl: 'assets/formatos/solicitud-compra.docx',
        fechaActualizacion: new Date('2024-02-20')
      },
      {
        id: 4,
        nombre: 'Evaluación de desempeño',
        categoria: 'Recursos Humanos',
        descripcion: 'Formato para evaluar desempeño de empleados',
        pdfUrl: 'assets/formatos/evaluacion-desempeno.pdf',
        docxUrl: 'assets/formatos/evaluacion-desempeno.docx',
        fechaActualizacion: new Date('2024-03-05')
      },
      {
        id: 5,
        nombre: 'Reporte de incidencias',
        categoria: 'IT',
        descripcion: 'Formato para reportar problemas técnicos',
        pdfUrl: 'assets/formatos/reporte-incidencias.pdf',
        docxUrl: 'assets/formatos/reporte-incidencias.docx',
        fechaActualizacion: new Date('2024-02-28')
      }
    ];
    this.formatosFiltrados = [...this.formatos];
  }

  extractCategorias(): void {
    // Extraer categorías únicas de los formatos
    const categoriasSet = new Set(this.formatos.map(formato => formato.categoria));
    this.categorias = Array.from(categoriasSet);
  }

  filtrarFormatos(): void {
    this.formatosFiltrados = this.formatos.filter(formato => {
      // Aplicar filtro de búsqueda
      const cumpleBusqueda = this.busqueda === '' || 
        formato.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        formato.descripcion.toLowerCase().includes(this.busqueda.toLowerCase());
      
      // Aplicar filtro de categoría
      const cumpleCategoria = this.categoriaSeleccionada === 'Todas' || 
        formato.categoria === this.categoriaSeleccionada;
      
      return cumpleBusqueda && cumpleCategoria;
    });
  }

  descargarPDF(url: string, nombre: string): void {
    //  aquí implementarías la lógica para descargar el archivo
    console.log(`Descargando PDF: ${nombre} desde ${url}`);
    // Por ahora simulamos la descarga con un enlace
    this.descargarArchivo(url, `${nombre}.pdf`);
  }

  descargarDOCX(url: string, nombre: string): void {
    //  aquí implementarías la lógica para descargar el archivo
    console.log(`Descargando DOCX: ${nombre} desde ${url}`);
    // Por ahora simulamos la descarga con un enlace
    this.descargarArchivo(url, `${nombre}.docx`);
  }

  private descargarArchivo(url: string, nombreArchivo: string): void {
    // En un caso real, utilizarías un servicio para esto
    const link = document.createElement('a');
    link.href = url;
    link.download = nombreArchivo;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  isMobile(): boolean {
    return this.windowWidth < 600;
  }
}