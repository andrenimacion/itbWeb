import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSenfermeriaComponent } from './tsenfermeria.component';

describe('TSenfermeriaComponent', () => {
  let component: TSenfermeriaComponent;
  let fixture: ComponentFixture<TSenfermeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSenfermeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSenfermeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
