import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurCreationComponent } from './coordinateur-creation.component';

describe('CoordinateurCreationComponent', () => {
  let component: CoordinateurCreationComponent;
  let fixture: ComponentFixture<CoordinateurCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
