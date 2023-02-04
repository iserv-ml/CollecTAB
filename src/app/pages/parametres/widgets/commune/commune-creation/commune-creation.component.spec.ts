import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneCreationComponent } from './commune-creation.component';

describe('CommuneCreationComponent', () => {
  let component: CommuneCreationComponent;
  let fixture: ComponentFixture<CommuneCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuneCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuneCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
