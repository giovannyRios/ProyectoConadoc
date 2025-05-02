import { Component } from '@angular/core';
import { DocsFormatsComponent } from './docs-formats.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocsFormatsComponent],
  template: `<app-docs-formats></app-docs-formats>`
})
export class AppComponent {}

