import { Component, OnInit } from "@angular/core";
import { ChessClass } from "./chess.class";

@Component({
  selector: "app-simple-chess-game",
  templateUrl: "./simple-chess-game.component.html",
  styleUrls: ["./simple-chess-game.component.css"]
})
export class SimpleChessGameComponent implements OnInit {
  tables = [];
  cssColorBoxs = [];
  chessPlayer1 = Array(8).map((d, i) => i);
  chessPlayer2 = Array(8).map((d, i) => i);

  constructor() {}

  ngOnInit() {
    this.tables = Array(8).fill(Array(8).fill(0));
    this.cssColorBoxs = Array(8).fill(Array(8).fill(0));
    this.initBoxCss();
  }
  private initBoxCss = () => {
    const chess = new ChessClass(this.tables);
    this.tables = chess.getBoxO_1();
    this.cssColorBoxs = chess.get0_1_toCssClass();
  };

  getPositionChess = event => {
    console.log({ event, x: event.x, y: event.y });
  };
}
