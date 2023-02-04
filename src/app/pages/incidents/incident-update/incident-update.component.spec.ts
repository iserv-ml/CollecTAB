import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentUpdateComponent } from './incident-update.component';

describe('IncidentUpdateComponent', () => {
  let component: IncidentUpdateComponent;
  let fixture: ComponentFixture<IncidentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
