const readJson = async () => {
  const response = await fetch("https://dummyjson.com/products/1", {method: "GET"});
  const data = await response.json();
  console.log(data);
}

readJson();