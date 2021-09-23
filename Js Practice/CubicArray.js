const cubicArray = (data) => {
   const newArr = [];
   data.forEach((item) => {
       /*const cube =( Math.pow(item, 3));*/
       newArr.push(Math.pow(item, 3)); 
   });
   return newArr;
}
console.log(cubicArray([2, 4, 5, 7]));