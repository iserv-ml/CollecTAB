import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceComponent } from './alliance.component';

describe('AllianceComponent', () => {
  let component: AllianceComponent;
  let fixture: ComponentFixture<AllianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
