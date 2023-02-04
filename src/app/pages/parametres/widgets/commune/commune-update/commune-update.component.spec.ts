import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneUpdateComponent } from './commune-update.component';

describe('CommuneUpdateComponent', () => {
  let component: CommuneUpdateComponent;
  let fixture: ComponentFixture<CommuneUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuneUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuneUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
