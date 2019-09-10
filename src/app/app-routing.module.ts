import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OxComponent } from "./components/ox/ox.component";
import { SimpleChessGameComponent } from "./components/simple-chess-game/simple-chess-game.component";

const routes: Routes = [
  {
    path: "chess",
    component: SimpleChessGameComponent
  },
  {
    path: "ox",
    component: OxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
