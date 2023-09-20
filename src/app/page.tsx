
'use client';
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { InputSearch } from "../components/InputSearch";
import { ListOfCard } from "../components/ListOfCard";

export default function Home() {

  const { searchByTitle, setSearchByTitle } = useContext(ShoppingCartContext);

  return (
    <main className="">
      <h1 className='text-lg font-medium mb-4 text-center'>Home</h1>
        <InputSearch  />
      <ListOfCard />
    </main>
  )
}
