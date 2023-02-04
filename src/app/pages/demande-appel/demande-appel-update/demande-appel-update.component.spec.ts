import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAppelUpdateComponent } from './demande-appel-update.component';

describe('DemandeAppelUpdateComponent', () => {
  let component: DemandeAppelUpdateComponent;
  let fixture: ComponentFixture<DemandeAppelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAppelUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeAppelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
