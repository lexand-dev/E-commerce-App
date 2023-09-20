import React from "react";
import { type ProductData } from "./api";


export interface ShoppingCartContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  handleProductDetailOpen: () => void;
  handleProductDetailClose: () => void;
  isProductDetailOpen: Boolean;
  handleCheckoutSideOpen: () => void;
  handleCheckoutSideClose: () => void;
  isCheckoutSideOpen: Boolean;
  showProductDetail: ProductData | {};
  setShowProductDetail: React.Dispatch< React.SetStateAction<ProductData | {}> >;
  productToCart: ProductData[];
  setProductToCart: React.Dispatch< React.SetStateAction<ProductData[]> >;

  order: ProductData[];
  setOrder: React.Dispatch< React.SetStateAction<ProductData[]> >;
};
