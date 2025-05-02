import { Component, Inject } from '@angular/core';
import { CommonModule }          from '@angular/common';
import { MatDialogModule }       from '@angular/material/dialog';
import { MatButtonModule }       from '@angular/material/button';
import { MatIconModule }         from '@angular/material/icon';
import { MAT_DIALOG_DATA }       from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div mat-dialog-content class="dialog-content">
      <img [src]="data.src" alt="Imagen ampliada" class="full-image">
    </div>
    <div mat-dialog-actions align="end">
      <button mat-icon-button mat-dialog-close aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 0;
      text-align: center;
      background: #000;
    }
    .full-image {
      max-width: 100vw;
      max-height: 95vh;
      object-fit: contain;
    }
  `]
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { src: string }) {}
}

