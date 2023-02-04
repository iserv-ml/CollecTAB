import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueViewComponent } from './statistique-view.component';

describe('StatistiqueViewComponent', () => {
  let component: StatistiqueViewComponent;
  let fixture: ComponentFixture<StatistiqueViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
