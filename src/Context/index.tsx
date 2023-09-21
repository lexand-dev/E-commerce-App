"use client";
import React, { createContext, useEffect, useState } from "react";
import { ProductData } from "../type/api";



const ShoppingCartContext = createContext( {} as any );

type ProviderProps = {
  children: React.ReactNode 
};

function ShoppingCartProvider ({ children }: ProviderProps) {
  // Shopping Cart Increment Quantity
  const [count, setCount] = useState(0);

  // Show Product Detail open or close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const handleProductDetailOpen = () => { setIsProductDetailOpen(true); };
  const handleProductDetailClose = () => { setIsProductDetailOpen(false); };

  // Show checkout side menu open or close
  const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false);
  const handleCheckoutSideOpen = () => { setIsCheckoutSideOpen(true); };
  const handleCheckoutSideClose = () => { setIsCheckoutSideOpen(false); };

  // Show product detail in modal window
  const [showProductDetail, setShowProductDetail] = useState({});
  
    // Shopping Cart . Add Product to Cart
  const [productToCart, setProductToCart] = useState<ProductData[]>([]);

  // Checkout . Add Order
  const [order, setOrder] = useState<ProductData[]>([]);

  // Fetch Data from API 
  const [items, setItems] = useState<ProductData[]>([]);
  const [filteredItems, setFilteredItems] = useState<ProductData[]>([]);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState('');

    // Get products by category
    const [filteredByCategory, setFilteredByCategory] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data))
        
  }, [])
  
  const filteredItemsByTitle = items?.filter((item) => {
    if (searchByTitle === undefined || searchByTitle === '' ) {
      return item;
    } else if (item.title.toLowerCase().includes(searchByTitle.toLowerCase())) {
      return item;
    } 

  });

  const filteredItemsByCategory = items?.filter((item) => {
    if (filteredByCategory === undefined || filteredByCategory === 'All' || filteredByCategory === 'Shopi' ) {
      return item;
    } else if (item.category.toLowerCase().includes(filteredByCategory.toLowerCase())) {
      return item;
    }
  });

  const filterBy = (searchType : string, items: any, searchByTitle: string) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType) {
      return items
    }
  }


  useEffect(() => {
    if (searchByTitle && filteredByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle,))
    if (searchByTitle && !filteredByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, ))
    if (!searchByTitle && filteredByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, ))
    if (!searchByTitle && !filteredByCategory) setFilteredItems(filterBy('', items, searchByTitle,))

  }, [searchByTitle, filteredByCategory, items]);





  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        handleProductDetailOpen,
        handleProductDetailClose,
        isProductDetailOpen,
        isCheckoutSideOpen,
        handleCheckoutSideOpen,
        handleCheckoutSideClose,
        showProductDetail,
        setShowProductDetail,
        productToCart, 
        setProductToCart,
        order, 
        setOrder,
        searchByTitle,
        setSearchByTitle,
        items,
        filteredItems,
        filteredItemsByTitle,
        filteredByCategory,
        setFilteredByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
