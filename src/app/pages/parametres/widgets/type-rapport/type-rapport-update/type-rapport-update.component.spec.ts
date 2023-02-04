import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRapportUpdateComponent } from './type-rapport-update.component';

describe('TypeRapportUpdateComponent', () => {
  let component: TypeRapportUpdateComponent;
  let fixture: ComponentFixture<TypeRapportUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRapportUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeRapportUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
