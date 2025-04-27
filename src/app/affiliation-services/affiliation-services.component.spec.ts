import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationServicesComponent } from './affiliation-services.component';

describe('AffiliationServicesComponent', () => {
  let component: AffiliationServicesComponent;
  let fixture: ComponentFixture<AffiliationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffiliationServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
