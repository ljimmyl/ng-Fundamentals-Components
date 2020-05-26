import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banana-in-a-box',
  templateUrl: './banana-in-a-box.component.html',
  styleUrls: ['./banana-in-a-box.component.css'],
})
export class BananaInABoxComponent implements OnInit {
  text: string = 'Hello Angular';

  constructor() {}

  ngOnInit(): void {}
}
