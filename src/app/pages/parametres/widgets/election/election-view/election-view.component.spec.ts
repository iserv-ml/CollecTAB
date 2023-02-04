import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionViewComponent } from './election-view.component';

describe('ElectionViewComponent', () => {
  let component: ElectionViewComponent;
  let fixture: ComponentFixture<ElectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
