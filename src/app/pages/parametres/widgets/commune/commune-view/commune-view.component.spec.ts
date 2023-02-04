import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneViewComponent } from './commune-view.component';

describe('CommuneViewComponent', () => {
  let component: CommuneViewComponent;
  let fixture: ComponentFixture<CommuneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuneViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
