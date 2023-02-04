import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauVoteAffectationAgentComponent } from './bureau-vote-affectation-agent.component';

describe('BureauVoteAffectationAgentComponent', () => {
  let component: BureauVoteAffectationAgentComponent;
  let fixture: ComponentFixture<BureauVoteAffectationAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauVoteAffectationAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauVoteAffectationAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
