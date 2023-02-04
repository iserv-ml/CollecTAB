import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysCreationComponent } from './pays-creation.component';

describe('PaysCreationComponent', () => {
  let component: PaysCreationComponent;
  let fixture: ComponentFixture<PaysCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaysCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
