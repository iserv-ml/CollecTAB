import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCreationComponent } from './region-creation.component';

describe('RegionCreationComponent', () => {
  let component: RegionCreationComponent;
  let fixture: ComponentFixture<RegionCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
