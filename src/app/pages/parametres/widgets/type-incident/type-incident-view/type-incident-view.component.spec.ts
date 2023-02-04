import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIncidentViewComponent } from './type-incident-view.component';

describe('TypeIncidentViewComponent', () => {
  let component: TypeIncidentViewComponent;
  let fixture: ComponentFixture<TypeIncidentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeIncidentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeIncidentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
