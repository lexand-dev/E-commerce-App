'use client';
import { ShoppingCartContext } from "@/src/Context";
import { ProductData } from "@/src/type/api";
import { useContext } from "react";
import Card from "./Card";



export const ListOfCard = () => {

  const { items, filteredItems, searchByTitle } = useContext(ShoppingCartContext);

  const renderItems = () => {

      if (filteredItems?.length > 0) {
        return (
          filteredItems?.map((item : ProductData) => (
            <Card key={item.id} product={item}
            />
        ))
        )
      } else {
        return (
          <div className="flex justify-center">
            <p className="text-2xl">No results found</p>
          </div>
        )
      }
  };
  
  
  return (
    <div className="grid grid-cols-4 w-full max-w-screen-lg gap-6">
      {renderItems()}
      </div>
  );
}