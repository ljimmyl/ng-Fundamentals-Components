import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrls: ['./using-pipes.component.css'],
})
export class UsingPipesComponent implements OnInit {
  birthday = new Date(1993, 4, 18);
  toggle = true;

  constructor() {}

  ngOnInit(): void {}

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
