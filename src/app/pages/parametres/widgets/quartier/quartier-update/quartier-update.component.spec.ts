import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierUpdateComponent } from './quartier-update.component';

describe('QuartierUpdateComponent', () => {
  let component: QuartierUpdateComponent;
  let fixture: ComponentFixture<QuartierUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartierUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartierUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
