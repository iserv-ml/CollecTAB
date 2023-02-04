import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRapportViewComponent } from './type-rapport-view.component';

describe('TypeRapportViewComponent', () => {
  let component: TypeRapportViewComponent;
  let fixture: ComponentFixture<TypeRapportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRapportViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeRapportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
