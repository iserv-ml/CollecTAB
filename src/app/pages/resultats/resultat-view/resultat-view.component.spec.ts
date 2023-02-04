import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatViewComponent } from './resultat-view.component';

describe('ResultatViewComponent', () => {
  let component: ResultatViewComponent;
  let fixture: ComponentFixture<ResultatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
