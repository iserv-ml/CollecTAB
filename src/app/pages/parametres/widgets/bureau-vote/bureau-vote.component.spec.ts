import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauVoteComponent } from './bureau-vote.component';

describe('BureauVoteComponent', () => {
  let component: BureauVoteComponent;
  let fixture: ComponentFixture<BureauVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
