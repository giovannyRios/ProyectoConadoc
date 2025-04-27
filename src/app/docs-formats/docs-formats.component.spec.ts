import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsFormatsComponent } from './docs-formats.component';

describe('DocsFormatsComponent', () => {
  let component: DocsFormatsComponent;
  let fixture: ComponentFixture<DocsFormatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsFormatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
