import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiComponent } from './parti.component';

describe('PartiComponent', () => {
  let component: PartiComponent;
  let fixture: ComponentFixture<PartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
