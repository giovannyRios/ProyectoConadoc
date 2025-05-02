import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer }   from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent { 
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer:   DomSanitizer
  ) {
    // 'fab' es el prefijo de FontAwesome Brands (fa-brands)
    this.iconRegistry.registerFontClassAlias('fab', 'fa-brands');
    // 'fas' para solids (fa-solid)
    this.iconRegistry.registerFontClassAlias('fas', 'fa-solid');
    // 'far' para regular  (fa-regular)
    this.iconRegistry.registerFontClassAlias('far', 'fa-regular');
  }
  title = 'Portal_Conadoc';
}
