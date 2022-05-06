import { productService } from "../http-common";

export const createCart = async (cart) => {
  return await productService.post("Cart/Create", cart);
};

export const getCartByUserId = async (id) => {
  return await productService.get(`/Cart/ListCartItem?OwnerId=${id}`);
};

export const placeOrder = async (order) => {
  return await productService.post(`/Cart/CreateOrder`, order);
};
