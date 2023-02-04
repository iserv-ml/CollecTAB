import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceViewComponent } from './alliance-view.component';

describe('AllianceViewComponent', () => {
  let component: AllianceViewComponent;
  let fixture: ComponentFixture<AllianceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllianceViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllianceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
