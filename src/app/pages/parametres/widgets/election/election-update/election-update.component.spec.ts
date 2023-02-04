import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionUpdateComponent } from './election-update.component';

describe('ElectionUpdateComponent', () => {
  let component: ElectionUpdateComponent;
  let fixture: ComponentFixture<ElectionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
