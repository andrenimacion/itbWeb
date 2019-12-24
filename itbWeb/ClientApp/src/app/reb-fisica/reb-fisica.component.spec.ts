import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebFisicaComponent } from './reb-fisica.component';

describe('RebFisicaComponent', () => {
  let component: RebFisicaComponent;
  let fixture: ComponentFixture<RebFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
