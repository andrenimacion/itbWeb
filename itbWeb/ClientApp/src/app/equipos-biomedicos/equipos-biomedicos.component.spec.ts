import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposBiomedicosComponent } from './equipos-biomedicos.component';

describe('EquiposBiomedicosComponent', () => {
  let component: EquiposBiomedicosComponent;
  let fixture: ComponentFixture<EquiposBiomedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposBiomedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposBiomedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
