import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceUpdateComponent } from './alliance-update.component';

describe('AllianceUpdateComponent', () => {
  let component: AllianceUpdateComponent;
  let fixture: ComponentFixture<AllianceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllianceUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllianceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
