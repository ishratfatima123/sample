const numberOftiles = (l, b, tl, tb, ntb, nooffloors, nobuilding) => {
  const numberOftilesperfloor = (l * b) / (tl * tb);
  const numberoftilesperbuilding = numberOftilesperfloor * nooffloors;
  const numberOftiles = numberoftilesperbuilding * nobuilding
  const numberOfboxes = numberOftiles / ntb;
  return numberOfboxes;
};

//* console.log(numberOftiles(20, 30, 2, 4, 10));*//
console.log(Math.ceil(numberOftiles(20, 30, 2, 2, 20, 4, 25)));