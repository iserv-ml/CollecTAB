import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiUpdateComponent } from './parti-update.component';

describe('PartiUpdateComponent', () => {
  let component: PartiUpdateComponent;
  let fixture: ComponentFixture<PartiUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
