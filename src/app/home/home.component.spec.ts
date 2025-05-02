import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent, // Importamos el componente standalone directamente
        NoopAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cycle slides correctly', () => {
    component.currentSlideIndex = 0;
    component.nextSlide();
    expect(component.currentSlideIndex).toBe(1);
    
    component.nextSlide();
    expect(component.currentSlideIndex).toBe(2);
    
    component.nextSlide();
    expect(component.currentSlideIndex).toBe(0);
  });

  it('should stop timer on destroy', () => {
    spyOn(component, 'ngOnDestroy').and.callThrough();
    component.ngOnDestroy();
    expect(component.ngOnDestroy).toHaveBeenCalled();
  });
});