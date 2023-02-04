import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentUpdateComponent } from './agent-update.component';

describe('AgentUpdateComponent', () => {
  let component: AgentUpdateComponent;
  let fixture: ComponentFixture<AgentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
