import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauVoteCreationComponent } from './bureau-vote-creation.component';

describe('BureauVoteCreationComponent', () => {
  let component: BureauVoteCreationComponent;
  let fixture: ComponentFixture<BureauVoteCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauVoteCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauVoteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
