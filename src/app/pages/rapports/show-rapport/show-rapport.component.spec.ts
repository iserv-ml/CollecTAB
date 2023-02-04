import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRapportComponent } from './show-rapport.component';

describe('ShowRapportComponent', () => {
  let component: ShowRapportComponent;
  let fixture: ComponentFixture<ShowRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
