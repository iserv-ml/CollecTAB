import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreUpdateComponent } from './centre-update.component';

describe('CentreUpdateComponent', () => {
  let component: CentreUpdateComponent;
  let fixture: ComponentFixture<CentreUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentreUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
