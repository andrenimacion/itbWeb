import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewDataComponent } from './modal-view-data.component';

describe('ModalViewDataComponent', () => {
  let component: ModalViewDataComponent;
  let fixture: ComponentFixture<ModalViewDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalViewDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
