import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  wishes = ['travel to Danmark', 'go to Coffeetel', 'see the aurora'];

  constructor() {}

  ngOnInit(): void {}

  addWish(newWish: string) {
    if (newWish) {
      this.wishes.push(newWish);
    }
  }
}
