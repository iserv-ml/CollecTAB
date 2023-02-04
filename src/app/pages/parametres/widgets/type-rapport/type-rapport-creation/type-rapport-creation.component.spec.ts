import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRapportCreationComponent } from './type-rapport-creation.component';

describe('TypeRapportCreationComponent', () => {
  let component: TypeRapportCreationComponent;
  let fixture: ComponentFixture<TypeRapportCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRapportCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeRapportCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
