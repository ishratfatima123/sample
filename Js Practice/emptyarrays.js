const number=[3,4];

 number.unshift("unshift method---",1,2);

 number.push(5,6);
 
 console.log("push method---",number);

 const digits=[10, 11, 12, 13, 14];

 digits.splice(2,0,"a","b");
 //first parameter: starting index
 //second parameter: remove items from starting index(including) and onward
 ///third parameter: add elements from starting
 console.log(digits);
 console.log("cheaking results", digits.slice())