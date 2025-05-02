import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias-detail',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './noticias-detail.component.html',
  styleUrls: ['./noticias-detail.component.css']
})
export class NoticiasDetailComponent implements OnInit {
  noticiaId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.noticiaId = idParam !== null ? +idParam : null;
  }
}
