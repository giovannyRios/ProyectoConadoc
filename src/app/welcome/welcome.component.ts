import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { RouterModule }     from '@angular/router';

/* Angular Material NgModules */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule }    from '@angular/material/list';
import { MatIconModule }    from '@angular/material/icon';
import { MatButtonModule }  from '@angular/material/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule      // ← lo necesitabas aquí
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit, OnDestroy {
  @ViewChild('videoPlayer', { static: true })
  videoPlayer!: ElementRef<HTMLVideoElement>;

  currentSlideIndex = 0;
  private slideInterval?: any;

  slides = [
    { type: 'image', content: 'assets/images/imagen_1.jpg' },
    { type: 'image', content: 'assets/images/imagen_2.jpg' },
    { type: 'image', content: 'assets/images/imagen_3.jpg' },
    { type: 'image', content: 'assets/images/imagen_4.jpg' },
    { type: 'image', content: 'assets/images/imagen_5.jpg' },
    { type: 'image', content: 'assets/images/imagen_6.jpg' },
    { type: 'image', content: 'assets/images/imagen_7.jpg' },
    { type: 'image', content: 'assets/images/imagen_8.jpg' },
    { type: 'image', content: 'assets/images/imagen_9.jpg' },
    { type: 'image', content: 'assets/images/imagen_10.jpg' },
    { type: 'image', content: 'assets/images/imagen_11.jpg' },
    { type: 'image', content: 'assets/images/imagen_12.jpg' },
    { type: 'image', content: 'assets/images/imagen_13.jpg' },
    { type: 'image', content: 'assets/images/imagen_14.jpg' },
    { type: 'image', content: 'assets/images/imagen_15.jpg' },
    { type: 'image', content: 'assets/images/imagen_16.jpg' },
    { type: 'image', content: 'assets/images/imagen_17.jpg' },
    { type: 'image', content: 'assets/images/imagen_18.jpg' },
    { type: 'image', content: 'assets/images/imagen_19.jpg' },
    { type: 'image', content: 'assets/images/imagen_20.jpg' },
    { type: 'image', content: 'assets/images/imagen_21.jpg' }
  ];

  ngOnInit() {
    this.slideInterval = setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    // si fuera un video, lo pausas antes de cambiar
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.pause();
    }
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval!);
  }
}