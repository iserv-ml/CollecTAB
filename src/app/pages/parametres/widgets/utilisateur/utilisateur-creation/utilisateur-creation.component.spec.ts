import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurCreationComponent } from './utilisateur-creation.component';

describe('UtilisateurCreationComponent', () => {
  let component: UtilisateurCreationComponent;
  let fixture: ComponentFixture<UtilisateurCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
