  //*mapping use---------*//
  //*------string arry---------*//
  /*const imgData = (arr) => arr.map(item => item["url"]);

console.log(
     imgData([
    {url: "google.com", title: "Google"},
    {url: "pickupbiz.com", title: "Pickupbiz"},
    {url: "Gmail.com", title: "Gmail"},
    {url: "Amazon.com", title: "Amazon"},
])
);*/
/*---------objectarry-----*/
const imgData = (arr) => 
arr.map((item) => `<img src="${item.url}" alt="${item.title}"" />`);
  //litrals
console.log(
     imgData([
    {url: "google.com", title: "Google"},
    {url: "pickupbiz.com", title: "Pickupbiz"},
    {url: "Gmail.com", title: "Gmail"},
    {url: "Amazon.com", title: "Amazon"},
])
);