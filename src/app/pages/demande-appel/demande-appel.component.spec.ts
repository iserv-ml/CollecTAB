import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAppelComponent } from './demande-appel.component';

describe('DemandeAppelComponent', () => {
  let component: DemandeAppelComponent;
  let fixture: ComponentFixture<DemandeAppelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAppelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
