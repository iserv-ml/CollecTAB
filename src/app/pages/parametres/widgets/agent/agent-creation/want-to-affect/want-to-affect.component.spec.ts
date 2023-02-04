import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToAffectComponent } from './want-to-affect.component';

describe('WantToAffectComponent', () => {
  let component: WantToAffectComponent;
  let fixture: ComponentFixture<WantToAffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToAffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantToAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
