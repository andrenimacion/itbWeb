import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSturismoComponent } from './tsturismo.component';

describe('TSturismoComponent', () => {
  let component: TSturismoComponent;
  let fixture: ComponentFixture<TSturismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSturismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSturismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
