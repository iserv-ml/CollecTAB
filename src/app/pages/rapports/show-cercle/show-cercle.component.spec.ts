import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCercleComponent } from './show-cercle.component';

describe('ShowCercleComponent', () => {
  let component: ShowCercleComponent;
  let fixture: ComponentFixture<ShowCercleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCercleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCercleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
