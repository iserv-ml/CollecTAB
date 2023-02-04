import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatUpdateComponent } from './candidat-update.component';

describe('CandidatUpdateComponent', () => {
  let component: CandidatUpdateComponent;
  let fixture: ComponentFixture<CandidatUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
