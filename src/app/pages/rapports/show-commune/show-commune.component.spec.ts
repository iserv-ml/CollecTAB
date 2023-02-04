import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCommuneComponent } from './show-commune.component';

describe('ShowCommuneComponent', () => {
  let component: ShowCommuneComponent;
  let fixture: ComponentFixture<ShowCommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCommuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
