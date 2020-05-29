import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TooltipButtonComponent } from './tooltip-button/tooltip-button.component';
import { BananaInABoxComponent } from './banana-in-a-box/banana-in-a-box.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HighlightDirective } from './highlight.directive';
import { NgIfFalseDirective } from './ng-if-false.directive';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
import { ExponentiationPipe } from './exponentiation.pipe';
import { ExponentiationCalcComponent } from './exponentiation-calc/exponentiation-calc.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TooltipButtonComponent, BananaInABoxComponent, ClickMeComponent, WishListComponent, HighlightDirective, NgIfFalseDirective, UsingPipesComponent, ExponentiationPipe, ExponentiationCalcComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
