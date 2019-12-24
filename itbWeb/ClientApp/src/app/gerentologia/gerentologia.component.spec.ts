import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerentologiaComponent } from './gerentologia.component';

describe('GerentologiaComponent', () => {
  let component: GerentologiaComponent;
  let fixture: ComponentFixture<GerentologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerentologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerentologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
