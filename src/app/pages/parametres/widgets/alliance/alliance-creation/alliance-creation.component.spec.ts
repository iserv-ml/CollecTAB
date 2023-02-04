import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceCreationComponent } from './alliance-creation.component';

describe('AllianceCreationComponent', () => {
  let component: AllianceCreationComponent;
  let fixture: ComponentFixture<AllianceCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllianceCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllianceCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
