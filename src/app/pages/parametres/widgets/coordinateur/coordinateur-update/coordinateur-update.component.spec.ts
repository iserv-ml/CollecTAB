import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurUpdateComponent } from './coordinateur-update.component';

describe('CoordinateurUpdateComponent', () => {
  let component: CoordinateurUpdateComponent;
  let fixture: ComponentFixture<CoordinateurUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
