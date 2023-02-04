import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiCreationComponent } from './parti-creation.component';

describe('PartiCreationComponent', () => {
  let component: PartiCreationComponent;
  let fixture: ComponentFixture<PartiCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartiCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
