const data = [2, 4, 5, 7];
 
console.log("using for loop...");
for(let i=0; i<data.length; i++){
    console.log(data[i]);
}
 
/*using foreach loop*/
console.log('using foreach loop');
data.forEach(item => {
    console.log(item);
});