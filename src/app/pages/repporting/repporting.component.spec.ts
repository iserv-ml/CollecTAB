import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepportingComponent } from './repporting.component';

describe('RepportingComponent', () => {
  let component: RepportingComponent;
  let fixture: ComponentFixture<RepportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
