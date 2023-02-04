import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueUpdateComponent } from './statistique-update.component';

describe('StatistiqueUpdateComponent', () => {
  let component: StatistiqueUpdateComponent;
  let fixture: ComponentFixture<StatistiqueUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
