import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseCreationComponent } from './phase-creation.component';

describe('PhaseCreationComponent', () => {
  let component: PhaseCreationComponent;
  let fixture: ComponentFixture<PhaseCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaseCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
