import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatitiquesComponent } from './statitiques.component';

describe('StatitiquesComponent', () => {
  let component: StatitiquesComponent;
  let fixture: ComponentFixture<StatitiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatitiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatitiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
