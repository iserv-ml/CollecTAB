import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleUpdateComponent } from './cercle-update.component';

describe('CercleUpdateComponent', () => {
  let component: CercleUpdateComponent;
  let fixture: ComponentFixture<CercleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercleUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
