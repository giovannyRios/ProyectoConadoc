import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

// Definimos la interfaz para los formatos
interface Format {
  id: number;
  name: string;
  category: string;
  description: string;
  pdfUrl: string;
  docxUrl: string;
}

@Component({
  selector: 'app-docs-formats',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './docs-formats.component.html',
  styleUrls: ['./docs-formats.component.css'] // ✅ CORRECTO
})
export class DocsFormatsComponent implements OnInit {
  // Control para el campo de búsqueda
  searchControl = new FormControl('');
  
  // Flag para detectar si estamos en vista móvil
  isMobileView = false;
  
  // Datos para el listado de formatos
  formats: Format[] = [
    {
      id: 1,
      name: 'Solicitud de Vacaciones',
      category: 'Administrativo',
      description: 'Formato para solicitar período vacacional',
      pdfUrl: 'assets/formats/solicitud-vacaciones.pdf',
      docxUrl: 'assets/formats/solicitud-vacaciones.docx'
    },
    {
      id: 2,
      name: 'Contrato de Servicios',
      category: 'Legal',
      description: 'Modelo de contrato para prestación de servicios',
      pdfUrl: 'assets/formats/contrato-servicios.pdf',
      docxUrl: 'assets/formats/contrato-servicios.docx'
    },
    {
      id: 3,
      name: 'Reporte de Gastos',
      category: 'Financiero',
      description: 'Formato para reportar gastos mensuales',
      pdfUrl: 'assets/formats/reporte-gastos.pdf',
      docxUrl: 'assets/formats/reporte-gastos.docx'
    },
    {
      id: 4,
      name: 'Acta de Reunión',
      category: 'Administrativo',
      description: 'Formato para documentar acuerdos en reuniones',
      pdfUrl: 'assets/formats/acta-reunion.pdf',
      docxUrl: 'assets/formats/acta-reunion.docx'
    },
    {
      id: 5,
      name: 'Especificación Técnica',
      category: 'Técnico',
      description: 'Plantilla para especificaciones técnicas de proyectos',
      pdfUrl: 'assets/formats/especificacion-tecnica.pdf',
      docxUrl: 'assets/formats/especificacion-tecnica.docx'
    }
  ];
  
  // Lista filtrada que se muestra en la UI
  filteredFormats: Format[] = [];
  
  // Categorías para los filtros
  categories: string[] = ['Todos', 'Administrativo', 'Legal', 'Técnico', 'Financiero'];
  selectedCategory: string = 'Todos';

  ngOnInit(): void {
    // Comprobar el tamaño de pantalla inicial
    this.checkScreenSize();
    
    // Inicializar la lista filtrada con todos los formatos
    this.filteredFormats = [...this.formats];
    
    // Configurar el listener para el campo de búsqueda
    this.searchControl.valueChanges.subscribe(searchTerm => {
      if (searchTerm !== null) {
        this.filterFormats(searchTerm);
      }
    });
  }

  // Detector de cambio de tamaño de ventana
  @HostListener('window:resize')
  checkScreenSize(): void {
    this.isMobileView = window.innerWidth < 600;
  }

  // Función para filtrar formatos según búsqueda y categoría
  filterFormats(searchTerm: string): void {
    this.filteredFormats = this.formats.filter(format => {
      const matchesSearch = !searchTerm || 
                          format.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          format.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'Todos' || 
                            format.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  // Función para cambiar la categoría seleccionada
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterFormats(this.searchControl.value || '');
  }

  // Función para descargar en PDF (US-DF-02)
  downloadPdf(format: Format): void {
    // En un entorno real, esto sería una petición HTTP o similar
    window.open(format.pdfUrl, '_blank');
  }

  // Función para descargar en DOCX (US-DF-03)
  downloadDocx(format: Format): void {
    // En un entorno real, esto sería una petición HTTP o similar
    window.open(format.docxUrl, '_blank');
  }
}