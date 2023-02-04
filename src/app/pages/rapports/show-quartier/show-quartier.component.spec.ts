import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuartierComponent } from './show-quartier.component';

describe('ShowQuartierComponent', () => {
  let component: ShowQuartierComponent;
  let fixture: ComponentFixture<ShowQuartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQuartierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowQuartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
