import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  titleExample = '{{title}}';

  values = '';
  valuesWithRefVar = '';
  boxValue = '';

  color = '#ccccff';

  miniAppColor: string;

  condition = 'false';

  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
  ];
  myHero = this.heroes[0];

  onKey(event: any) {
    this.values = event.target.value;
    // console.log(event);
  }

  onKeyWithReferenceVar(value: string) {
    this.valuesWithRefVar += value + ' | ';
  }

  update(value: string) {
    this.boxValue = value;
    console.log(value);
  }
}
