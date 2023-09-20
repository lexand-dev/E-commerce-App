import { ChevronRightIcon } from "@/src/Icons/Index";

interface OrdersCardProps {
  totalPrice: number;
  totalProducts: number;
  date: string;
}

export const OrdersCard = (props : OrdersCardProps)   => {
  const { totalPrice, totalProducts, date }  = props


  return(
        <>
        
      <div className='flex justify-between items-center w-80 h-20 relative rounded border border-black px-2 py-5 gap-2 mb-4'>
        <p className='text-sm font-light absolute top-0 '>{date}</p>
        <p className='text-lg font-medium'>$ {totalPrice}</p>
        <div className="flex items-center gap-4">
        <p className='text-lg font-medium'>{totalProducts} Articles</p>
        <ChevronRightIcon />
        </div>
      </div>
        </>
  ) 
}