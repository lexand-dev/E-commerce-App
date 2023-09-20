'use client';
import { ShoppingCartContext } from "@/src/Context";
import { useContext } from "react";

type InputSearchProps = {
  searchByTitle: string;
  setSearchByTitle: (searchByTitle: string) => void;
};

export const InputSearch = () => {
  const { searchByTitle, setSearchByTitle } = useContext(ShoppingCartContext)

  return (
    <div className="flex justify-center">
      <input
        className="border border-gray-400 rounded-md w-96 p-2 mb-4 focus:outline-none"
        type="text"
        placeholder="Search by title"
        value={searchByTitle}
        onChange={(e) => setSearchByTitle(e.target.value)}
      />
    </div>
  );
}