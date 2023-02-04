import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAppelViewComponent } from './demande-appel-view.component';

describe('DemandeAppelViewComponent', () => {
  let component: DemandeAppelViewComponent;
  let fixture: ComponentFixture<DemandeAppelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAppelViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeAppelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
