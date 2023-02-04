import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierViewComponent } from './quartier-view.component';

describe('QuartierViewComponent', () => {
  let component: QuartierViewComponent;
  let fixture: ComponentFixture<QuartierViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartierViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
