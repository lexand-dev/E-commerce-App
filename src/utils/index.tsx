import { ProductData } from "../type/api";

/**
 * Esta función calcula el precio total de los productos en el carrito de compras.
 * @param productToCart - Un array de objetos ProductData.
 * @returns El precio total como un número.
 */

export const totalPrice = (productToCart: ProductData[]) => {
  return productToCart.reduce((acc, item) => acc + item.price, 0);
}