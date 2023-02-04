import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauVoteViewComponent } from './bureau-vote-view.component';

describe('BureauVoteViewComponent', () => {
  let component: BureauVoteViewComponent;
  let fixture: ComponentFixture<BureauVoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauVoteViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauVoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
