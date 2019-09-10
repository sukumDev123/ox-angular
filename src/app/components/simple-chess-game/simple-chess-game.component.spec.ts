import { ChessClass } from "./chess.class";
describe("SimpleChessGameComponent", () => {
  it(`css box class`, () => {
    const css_s = ["color_normal", "color_Box"];
    const tables = Array(8).fill(Array(8).fill(0));
    const chess = new ChessClass(tables);
    expect([
      [
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1]
      ],
      [
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0]
      ],
      [
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1]
      ],
      [
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0]
      ],
      [
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1]
      ],
      [
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0]
      ],
      [
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1]
      ],
      [
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0],
        css_s[1],
        css_s[0]
      ]
    ]).toEqual(chess.get0_1_toCssClass());
  });

  it("css box of set value 0 and 1", () => {
    const tables = Array(8).fill(Array(8).fill(0));
    const chess = new ChessClass(tables);
    expect([
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0]
    ]).toEqual(chess.getBoxO_1());
  });
  // let component: SimpleChessGameComponent;
  // let fixture: ComponentFixture<SimpleChessGameComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ SimpleChessGameComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(SimpleChessGameComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
