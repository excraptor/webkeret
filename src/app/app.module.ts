import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { TraitsComponent } from './traits/traits.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GameComponent,
    TextComponent,
    TraitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
