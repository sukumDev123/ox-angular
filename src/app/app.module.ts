import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OxComponent } from "./components/ox/ox.component";
import { SimpleChessGameComponent } from "./components/simple-chess-game/simple-chess-game.component";

@NgModule({
  declarations: [AppComponent, OxComponent, SimpleChessGameComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
