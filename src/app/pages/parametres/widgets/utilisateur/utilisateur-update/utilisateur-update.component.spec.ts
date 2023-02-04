import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurUpdateComponent } from './utilisateur-update.component';

describe('UtilisateurUpdateComponent', () => {
  let component: UtilisateurUpdateComponent;
  let fixture: ComponentFixture<UtilisateurUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
