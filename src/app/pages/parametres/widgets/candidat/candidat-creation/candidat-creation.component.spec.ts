import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatCreationComponent } from './candidat-creation.component';

describe('CandidatCreationComponent', () => {
  let component: CandidatCreationComponent;
  let fixture: ComponentFixture<CandidatCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
