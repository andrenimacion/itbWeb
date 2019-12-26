import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeatriaComponent } from './cosmeatria.component';

describe('CosmeatriaComponent', () => {
  let component: CosmeatriaComponent;
  let fixture: ComponentFixture<CosmeatriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeatriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
