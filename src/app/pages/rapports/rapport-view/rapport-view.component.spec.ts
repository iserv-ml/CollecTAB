import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportViewComponent } from './rapport-view.component';

describe('RapportViewComponent', () => {
  let component: RapportViewComponent;
  let fixture: ComponentFixture<RapportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
