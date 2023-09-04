const url = "https://dummyjson.com/"

const readJson = async () => {
  const response = await fetch("https://dummyjson.com/products/1", {method: "GET"});
  const data = await response.json();
  console.log(data);
}

const allProducts = async () => {
  const response = await fetch(url+"products", {method:"GET"});
  const data = await response.json();
  console.log(data);
  document.querySelector("#allProducts").innerHTML = "";
  data.products.forEach(element => {
    document.querySelector("#allProducts").innerHTML += cardProduct(element);
  });
}

const cardProduct = (products) => {
  return `
  <div class="card col-3 mt-3 p-0">
  <img src="${products.thumbnail}" alt="${products.title}">
  <div class="card-body">
    <h5 class="card-title">
      ${products.title}
    </h5>
    <p class="card-text">
      ${products.description}
    </p>
  </div>
  <button type="button" onclick="oneProduct(${products.id})">Ver producto</a>
</div>
  `;
}

const filtrar = async () => {
  buscar = document.getElementById("filter").value;

  if (buscar.trim().length > 2) {
    const response = await fetch(url+"products/search?q="+buscar);
    const data = await response.json();
    console.log(data);
    document.querySelector("#allProducts").innerHTML = "";
    data.products.forEach(element => {
      document.querySelector("#allProducts").innerHTML += cardProduct(element);
    });
  }
}

const oneProduct = (id) => {
  console.log(id);
}

allProducts();