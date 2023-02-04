import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleCreationComponent } from './cercle-creation.component';

describe('CercleCreationComponent', () => {
  let component: CercleCreationComponent;
  let fixture: ComponentFixture<CercleCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercleCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercleCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
