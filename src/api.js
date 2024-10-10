async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Could not fetch products");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getSingleProduct(productId) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!response.ok) {
      throw new Error("Could not fetchi this product");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export { getProducts, getSingleProduct };
