import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCreationComponent } from './agent-creation.component';

describe('AgentCreationComponent', () => {
  let component: AgentCreationComponent;
  let fixture: ComponentFixture<AgentCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
