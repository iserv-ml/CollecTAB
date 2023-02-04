import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIncidentCreationComponent } from './type-incident-creation.component';

describe('TypeIncidentCreationComponent', () => {
  let component: TypeIncidentCreationComponent;
  let fixture: ComponentFixture<TypeIncidentCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeIncidentCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeIncidentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
