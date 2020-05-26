import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TooltipButtonComponent } from './tooltip-button/tooltip-button.component';
import { BananaInABoxComponent } from './banana-in-a-box/banana-in-a-box.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TooltipButtonComponent, BananaInABoxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
