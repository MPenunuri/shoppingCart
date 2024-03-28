const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function getProducts(items) {
  const products = [];
  if (items) {
    await Promise.all(
      items.map(async (i) => {
        try {
          const productData = await getData(
            `https://fakestoreapi.com/products/${i.productId}`
          );
          if (productData !== undefined) products.push(productData);
        } catch (error) {
          console.error(error);
        }
      })
    );
    return products;
  }
  return products;
}
