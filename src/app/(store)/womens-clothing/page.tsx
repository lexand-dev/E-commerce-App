import { InputSearch } from "@/src/components/InputSearch";
import { ListOfCard } from "@/src/components/ListOfCard";

export default function WomensClothing() {
  return (
    <div>
    <h1 className='text-lg font-medium mb-4 text-center'>Womens Clothing</h1>
      <InputSearch />
    <ListOfCard />
  </div>
  )
}
