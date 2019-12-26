import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesSoftwareComponent } from './des-software.component';

describe('DesSoftwareComponent', () => {
  let component: DesSoftwareComponent;
  let fixture: ComponentFixture<DesSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
