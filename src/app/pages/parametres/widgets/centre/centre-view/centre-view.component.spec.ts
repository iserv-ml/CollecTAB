import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreViewComponent } from './centre-view.component';

describe('CentreViewComponent', () => {
  let component: CentreViewComponent;
  let fixture: ComponentFixture<CentreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
