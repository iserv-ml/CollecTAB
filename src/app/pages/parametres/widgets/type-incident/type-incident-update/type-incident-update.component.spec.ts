import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIncidentUpdateComponent } from './type-incident-update.component';

describe('TypeIncidentUpdateComponent', () => {
  let component: TypeIncidentUpdateComponent;
  let fixture: ComponentFixture<TypeIncidentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeIncidentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeIncidentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
