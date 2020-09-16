import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosUpsertComponent } from './todos-upsert.component';

describe('TodosUpsertComponent', () => {
  let component: TodosUpsertComponent;
  let fixture: ComponentFixture<TodosUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
