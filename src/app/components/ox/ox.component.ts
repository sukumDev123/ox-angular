import { Component, OnInit } from "@angular/core";
import { OxHowto } from "./ox.howt";

@Component({
  selector: "app-ox",
  templateUrl: "./ox.component.html",
  styleUrls: ["./ox.component.css"]
})
export class OxComponent implements OnInit {
  private defaultVal = () => [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  private defaultCss = () => [
    ["none", "none", "none"],
    ["none", "none", "none"],
    ["none", "none", "none"]
  ];
  showIs = false;
  boxs = [1, 2, 3];
  box_script = this.defaultVal();
  state = "o";
  stateBefore = "x";
  stateDew = "";
  scoreX = 0;
  scoreO = 0;
  dewsVal = 0;
  color_click = this.defaultCss();
  constructor() {}

  ngOnInit() {}
  checkValFunc(ind, ind2) {
    return this.box_script[ind][ind2] == "x" ||
      this.box_script[ind][ind2] == "o"
      ? true
      : false;
  }
  onClickBox(ind, ind2) {
    const checkVAl = this.checkValFunc(ind, ind2);
    if (!checkVAl) {
      if (this.state == "o") {
        this.box_script[ind][ind2] = "o";
        this.color_click[ind][ind2] = "clicked_o";

        this.state = "x";
        this.stateBefore = "o";
      } else {
        this.box_script[ind][ind2] = "x";
        this.color_click[ind][ind2] = "clicked_x";

        this.state = "o";
        this.stateBefore = "x";
      }
    }
    this.changeValMax();
  }

  changeValMax() {
    const oxClass = new OxHowto(this.box_script);
    const vertical = oxClass.checkOxVertical();
    const horisental = oxClass.checkHorizontalIsLike3boxs(this.stateBefore);
    const z = oxClass.checkZ();
    if (vertical === true || horisental === true || z === true) {
      this.showIs = true;
      if (this.stateBefore === "x") {
        this.scoreX += 1;
      } else if (this.stateBefore === "o") {
        this.scoreO += 1;
      }
    }
    const ggg = this.color_click
      .map(d => d.filter(d2 => d2 !== "none").length)
      .reduce((sum, val) => sum + val, 0);

    if (ggg === 9) {
      // console.log('dewss')
      this.dewsVal += 1;
      this.showIs = true;
      this.stateDew = "dew";
    }
  }

  resetVal() {
    this.box_script = this.defaultVal();
    this.color_click = this.defaultCss();
    this.stateDew = "";
    this.showIs = false;
  }
}
