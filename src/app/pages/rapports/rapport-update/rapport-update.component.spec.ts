import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportUpdateComponent } from './rapport-update.component';

describe('RapportUpdateComponent', () => {
  let component: RapportUpdateComponent;
  let fixture: ComponentFixture<RapportUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
