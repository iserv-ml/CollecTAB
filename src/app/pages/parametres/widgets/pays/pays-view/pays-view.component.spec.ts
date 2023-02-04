import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysViewComponent } from './pays-view.component';

describe('PaysViewComponent', () => {
  let component: PaysViewComponent;
  let fixture: ComponentFixture<PaysViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaysViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
