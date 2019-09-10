export class ChessClass {
  constructor(private tables: any) {}
  get0_1_toCssClass() {
    const css_s = ["color_normal", "color_Box"];

    const tables01 = this.getBoxO_1();
    const table01ToClassName = tables01.map(tables => {
      return tables.map(table => (table === 0 ? css_s[0] : css_s[1]));
    });
    return table01ToClassName;
  }

  getBoxO_1() {
    const tablesChess = this.tables.map((tables, ind) => {
      if (ind % 2 === 0) {
        const chessIndOddIs1 = tables.map((d, i) => (i % 2 === 0 ? 0 : 1));
        return chessIndOddIs1;
      } else {
        const chessIndEvenIs1 = tables.map((d, i) => (i % 2 !== 0 ? 0 : 1));
        return chessIndEvenIs1;
      }
    });

    return tablesChess;
  }
}
