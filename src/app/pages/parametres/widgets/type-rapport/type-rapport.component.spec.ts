import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRapportComponent } from './type-rapport.component';

describe('TypeRapportComponent', () => {
  let component: TypeRapportComponent;
  let fixture: ComponentFixture<TypeRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
