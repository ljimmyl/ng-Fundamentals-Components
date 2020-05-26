import { Component, OnInit, Input } from '@angular/core';

import EXPLANATIONS from '../explanation-phrases';

@Component({
  selector: 'app-tooltip-button',
  templateUrl: './tooltip-button.component.html',
  styleUrls: ['./tooltip-button.component.css'],
})
export class TooltipButtonComponent implements OnInit {
  isClicked = false;

  @Input() explanations = EXPLANATIONS;

  constructor() {}

  ngOnInit(): void {}

  clickHandeler() {
    return (this.isClicked = true);
  }
}
