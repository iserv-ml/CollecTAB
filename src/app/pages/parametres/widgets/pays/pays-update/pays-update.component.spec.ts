import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysUpdateComponent } from './pays-update.component';

describe('PaysUpdateComponent', () => {
  let component: PaysUpdateComponent;
  let fixture: ComponentFixture<PaysUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaysUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
