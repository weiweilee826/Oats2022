import axios from "axios";
export { getProduct, addToCart, getCart, deleteCart };

async function getProduct(id) {
  let product;
  const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/product/${id}`;
  await axios.get(url).then((response) => {
    if (response.data.success) {
      product = response.data.product;
    }
  });
  return product;
}

async function addToCart(product_id, qty) {
  let res;
  const data = { product_id, qty };
  const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
  await axios.post(url, { data }).then((response) => {
    res = response.data.success;
  });
  return res;
}

async function getCart() {
  let res;
  const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
  await axios.get(url).then((response) => {
    res = response.data.data.carts;
  });
  return res;
}

function deleteCart(id) {
  let res;
  const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${id}`;
  axios.delete(url).then((response) => {
    res = response;
  });
  return res;
}
