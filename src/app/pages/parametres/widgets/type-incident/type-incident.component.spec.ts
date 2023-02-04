import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIncidentComponent } from './type-incident.component';

describe('TypeIncidentComponent', () => {
  let component: TypeIncidentComponent;
  let fixture: ComponentFixture<TypeIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
