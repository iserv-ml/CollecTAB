import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleViewComponent } from './cercle-view.component';

describe('CercleViewComponent', () => {
  let component: CercleViewComponent;
  let fixture: ComponentFixture<CercleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
