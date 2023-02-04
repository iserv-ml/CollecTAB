import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurViewComponent } from './coordinateur-view.component';

describe('CoordinateurViewComponent', () => {
  let component: CoordinateurViewComponent;
  let fixture: ComponentFixture<CoordinateurViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
