import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentiationCalcComponent } from './exponentiation-calc.component';

describe('ExponentiationCalcComponent', () => {
  let component: ExponentiationCalcComponent;
  let fixture: ComponentFixture<ExponentiationCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExponentiationCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponentiationCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
