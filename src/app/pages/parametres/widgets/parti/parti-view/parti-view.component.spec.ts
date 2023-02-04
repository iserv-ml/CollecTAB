import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiViewComponent } from './parti-view.component';

describe('PartiViewComponent', () => {
  let component: PartiViewComponent;
  let fixture: ComponentFixture<PartiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
