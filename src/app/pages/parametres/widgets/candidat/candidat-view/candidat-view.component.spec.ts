import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatViewComponent } from './candidat-view.component';

describe('CandidatViewComponent', () => {
  let component: CandidatViewComponent;
  let fixture: ComponentFixture<CandidatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
