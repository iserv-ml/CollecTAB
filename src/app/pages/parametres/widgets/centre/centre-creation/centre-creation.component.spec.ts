import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreCreationComponent } from './centre-creation.component';

describe('CentreCreationComponent', () => {
  let component: CentreCreationComponent;
  let fixture: ComponentFixture<CentreCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentreCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
