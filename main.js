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

// const productName = document.querySelector(".productName");
// const productdescription = document.querySelector(".productdescription");
// const produtPrice = document.querySelector(".produtPrice");
// const productimg = document.querySelector(".productimg");
// const brand = document.querySelector(".brand");

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
    return reData.products.slice(4, 12);
  })
  .then((allProducts) => {
    displayData(allProducts);
  });

function displayData(allProductsData) {
  console.log(allProductsData);
  const alldata = allProductsData.map((item) => {
    return `
    <img src="${item.images[0]}" alt="image" />
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <h4>${item.brand}</h4>
        <h3>${"$" + item.price}</h3>
        <h5>${item.category}</h5>
    `;
  });

  card.innerHTML = alldata;
}
