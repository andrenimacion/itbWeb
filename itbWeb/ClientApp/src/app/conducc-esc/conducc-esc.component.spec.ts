import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConduccEscComponent } from './conducc-esc.component';

describe('ConduccEscComponent', () => {
  let component: ConduccEscComponent;
  let fixture: ComponentFixture<ConduccEscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConduccEscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConduccEscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
