import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCentreComponent } from './show-centre.component';

describe('ShowCentreComponent', () => {
  let component: ShowCentreComponent;
  let fixture: ComponentFixture<ShowCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
