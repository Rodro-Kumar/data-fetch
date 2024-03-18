// const productName = document.querySelector(".productName");
// const productdescription = document.querySelector(".productdescription");
// const produtPrice = document.querySelector(".produtPrice");

// const api = "https://dummyjson.com/products";

// fetch(api)
//   .then((response) => {
//     return response;
//   })
//   .then((dta) => {
//     return dta.json();
//   })
//   .then((finalData) => {
//     return finalData.products;
//   })
//   .then((output) => {
//     display(output);
//   });

// function display(result) {
//   console.log(result);
// }

// / const api = "https://dummyjson.com/products";

// fetch(api)
//   .then((data) => {
//     return data.json();
//   })
//   .then((allData) => {
//     return allData.products;
//   })
//   .then((product) => {
//     return product;
//   })
//   .then((returnData) => {
//     const splitData = returnData.split(" ");
//     console.log(splitData);
//   });

// function fetchData() {
//   return new Promise(function (resolve, rejected) {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         resolve(data);
//       });
//   });
// }

// function displayProduct(data) {
//   console.log("our data is : ", data);
// }

// fetchData().then((returnData) => {
//   console.log(returnData.products);
// });

const productName = document.getElementById("productName");
const productdescription = document.querySelector(".productdescription");
const produtPrice = document.querySelector(".produtPrice");
const productimg = document.querySelector(".productimg");
const brand = document.querySelector(".brand");
const card = document.querySelector(".card");

function dataFetcher() {
  return new Promise(function (resolve, rejected) {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

function display(data) {
  console.log("our data is ", data);
}

dataFetcher()
  .then((reData) => {
    return reData.products;
  })
  .then((allProducts) => {
    let product = allProducts;

    return product;
  })
  .then((data) => {
    let allData = data[0];
    productName.innerHTML = allData.title;
    productdescription.innerHTML = allData.description;
    produtPrice.innerHTML = allData.price + " $";
    brand.innerHTML = allData.brand;
    productimg.src = allData.images[0];
  });
