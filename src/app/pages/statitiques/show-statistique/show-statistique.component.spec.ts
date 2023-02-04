import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStatistiqueComponent } from './show-statistique.component';

describe('ShowStatistiqueComponent', () => {
  let component: ShowStatistiqueComponent;
  let fixture: ComponentFixture<ShowStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStatistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
