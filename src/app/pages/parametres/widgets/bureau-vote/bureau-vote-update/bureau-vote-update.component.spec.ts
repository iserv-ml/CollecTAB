import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauVoteUpdateComponent } from './bureau-vote-update.component';

describe('BureauVoteUpdateComponent', () => {
  let component: BureauVoteUpdateComponent;
  let fixture: ComponentFixture<BureauVoteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauVoteUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauVoteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
