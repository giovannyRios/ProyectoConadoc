import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

interface Benefit {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ImageDialogComponent],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      icon: 'assets/images/CREDI-IMPUESTOS.jpeg',
      title: 'Crédito Impuestos'
    },
    {
      icon: 'assets/images/CREDITO_COMPRA_CARTERA.jpeg',
      title: 'Crédito compra cartera'
    },
    {
      icon: 'assets/images/CREDITO-DE-CONSUMO.jpeg',
      title: 'Crédito consumo'
    },
    {
      icon: 'assets/images/CREDITO-DE-VINCULACION.jpeg',
      title: 'Crédito vinculacion'
    },
    {
      icon: 'assets/images/CREDITO-EDUCATIVO.jpeg',
      title: 'Crédito educativo'
    },
    {
      icon: 'assets/images/CREDITO-HASTA-LOS-APORTES.jpeg',
      title: 'Crédito aportes'
    },
    {
      icon: 'assets/images/CREDITO-PARA-ARREGLOS-LOCATIVOS.jpeg',
      title: 'Crédito locativos'
    },
    {
      icon: 'assets/images/CREDITO-RECREACION-Y-TURISMO.jpeg',
      title: 'Crédito recreacion'
    }
  ];

  constructor(private dialog: MatDialog) {}

  openImage(src: string) {
    this.dialog.open(ImageDialogComponent, {
      data: { src },
      panelClass: 'image-dialog-panel',
      maxWidth: '95vw',
      maxHeight: '95vh'
    });
  }

}
