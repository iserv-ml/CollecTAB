import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBureauVoteComponent } from './show-bureau-vote.component';

describe('ShowBureauVoteComponent', () => {
  let component: ShowBureauVoteComponent;
  let fixture: ComponentFixture<ShowBureauVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBureauVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBureauVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
