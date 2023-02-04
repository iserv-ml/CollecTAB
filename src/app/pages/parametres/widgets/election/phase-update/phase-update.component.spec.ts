import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseUpdateComponent } from './phase-update.component';

describe('PhaseUpdateComponent', () => {
  let component: PhaseUpdateComponent;
  let fixture: ComponentFixture<PhaseUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
