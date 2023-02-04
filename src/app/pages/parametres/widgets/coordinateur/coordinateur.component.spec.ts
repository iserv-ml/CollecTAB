import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurComponent } from './coordinateur.component';

describe('CoordinateurComponent', () => {
  let component: CoordinateurComponent;
  let fixture: ComponentFixture<CoordinateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
