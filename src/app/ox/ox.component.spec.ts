import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxComponent } from './ox.component';
import { OxHowto } from './ox.howt';

describe('OxComponent', () => {
  it(`
    x o o
    o o o
    o x x
  ` , () => {
    const oxClass = new OxHowto([['x' , 'o' , 'o'] , ['o' , 'o' , 'o'] , ['o' , 'x' , 'x']])
    expect(true).toEqual(oxClass.checkZ())
  } )
  it(`
  when x x x
       o x o
       x x x
       true
  ` , () => {
    const oxClass = new OxHowto([['x' , 'x' , 'x'] , ['x' , 'x' , 'o'] , ['x' , 'x' , 'x']])
    expect(true).toEqual(oxClass.checkZ())
  })
  it(`
  when x x x
       x o o
       x x x
       false
  ` , () => {
    const oxClass = new OxHowto([['x' , 'x' , 'x'] , ['x' , 'o' , 'o'] , ['x' , 'x' , 'x']])
    expect(true).toEqual(oxClass.checkOxVertical())
  })
  it(`
  when x x x
       o o x
       x x x
       true
  ` , () => {
    const oxClass = new OxHowto([['x' , 'x' , 'x'] , ['o' , 'o' , 'x'] , ['x' , 'x' , 'x']])
    expect(true).toEqual(oxClass.checkOxVertical())
  })
  it(`
  when x x x
       o x o
       x x x
       true
  ` , () => {
    const oxClass = new OxHowto([['x' , 'x' , 'x'] , ['o' , 'x' , 'o'] , ['x' , 'x' , 'x']])
    expect(true).toEqual(oxClass.checkOxVertical())
  })
  it(`
  when o x x
       o o o
       o x x
       true
  ` , () => {
    const oxClass = new OxHowto([['o' , 'x' , 'x'] , ['o' , 'o' , 'o'] , ['o' , 'x' , 'x']])
    expect(true).toEqual(oxClass.checkOxVertical())
  })
  it(`
  when x x x
       o o o
       x x x
       false
  ` , () => {
    const oxClass = new OxHowto([['x' , 'x' , 'x'] , ['o' , 'o' , 'o'] , ['x' , 'x' , 'x']])
    expect(false).toEqual(oxClass.checkOxVertical(1))
  })
  it(`
  when x x x
       x x x
       x x x
  ` , () => {
    const oxClass = new OxHowto([['x' , 'x' , 'x'] , ['x' , 'x' , 'x'] , ['x' , 'x' , 'o']])
    expect(true).toEqual(oxClass.checkOxVertical())

  })


  it(`
  'when x == x == x == true'
  ` , () => {
    const oxClass = new OxHowto([['x' , 'x' , 'x'] , ['o' , 'x' , 'o'] , ['o' , 'x' , 'o']])
    expect(true).toEqual(oxClass.checkOxHorizen())

  })
  it('when o == o == o == true ', () => {
    const oxClass = new OxHowto([['o' , 'o' , 'o'] , ['o' , 'o' , 'o'] , ['o' , 'o' , 'o']])
    expect(true).toEqual(oxClass.checkOxHorizen())
  });
  it('when o != x != 0 == false' , () => {
    const oxClass = new OxHowto([['o' , 'x' , 'o'] , ['o' , 'x' , 'o'] , ['o' , 'x' , 'o']])
    expect(false).toEqual(oxClass.checkOxHorizen())

  })

 
});
