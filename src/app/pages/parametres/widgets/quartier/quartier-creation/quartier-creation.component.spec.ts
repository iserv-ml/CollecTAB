import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierCreationComponent } from './quartier-creation.component';

describe('QuartierCreationComponent', () => {
  let component: QuartierCreationComponent;
  let fixture: ComponentFixture<QuartierCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartierCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartierCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
