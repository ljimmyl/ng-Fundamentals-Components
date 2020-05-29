import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exponentiation-calc',
  templateUrl: './exponentiation-calc.component.html',
  styleUrls: ['./exponentiation-calc.component.css'],
})
export class ExponentiationCalcComponent implements OnInit {
  number = 5;
  exponent = 1;

  constructor() {}

  ngOnInit(): void {}
}
