export class OxHowto {
  private datas: any;
  constructor(datas) {
    this.datas = datas;
  }

  checkHorizontalIsLike3boxs = (vec, sizeOfTic = 3) => {
    const checkCountOfValInput = (lists: String[]) =>
      lists.filter(datas => datas === vec); // (x , x , ).leng
    const checkValExists3BoxsMore0Size =
      this.datas.filter(boxs => checkCountOfValInput(boxs).length === sizeOfTic)
        .length > 0;
    return checkValExists3BoxsMore0Size;
  };

  checkOxVertical() {
    const size = this.datas.length;
    const boxs = this.datas;
    let gg = false;
    for (let x = 0; x < size; x++) {
      let g0 = boxs[0][x];
      let g1 = boxs[1][x];
      let g2 = boxs[2][x];
      if (g0 == g1 && g1 == g2) {
        gg = true;
        break;
      }
    }
    return gg;
  }
  checkZ() {
    const boxs = this.datas;
    if (boxs[0][0] == boxs[1][1] && boxs[1][1] == boxs[2][2]) {
      return true;
    } else if (boxs[0][2] == boxs[1][1] && boxs[1][1] == boxs[2][0]) {
      return true;
    }
    return false;
  }
}
