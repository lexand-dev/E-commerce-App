'use client'
import { ShoppingCartContext } from "@/src/Context";
import { ChevronLeftIcon } from "@/src/Icons/Index";
import { OrderCard } from "@/src/components/CheckoutSideMenu/OrderCard";
import { ProductData } from "@/src/type/api";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useContext } from "react";

interface OrderCard {
  totalPrice: number;
  totalProducts: number;
  date: string;
  products: ProductData[]
}

export default function MyOrder() {

  const { order } :{ order: OrderCard[] } = useContext(ShoppingCartContext)
  const pathname = usePathname()
  let index = pathname.substring(pathname.lastIndexOf('/') + 1)
  
  if(!order) return <p>Loading...</p>
  
  if(index === 'last') index = (order.length - 1).toString();

  return (
    <>
      <div className="flex w-96 items-center justify-center relative pb-6">
        <Link href='/my-orders' className="absolute left-0">
          <ChevronLeftIcon />
        </Link>
        <h1>My Order</h1>
      </div>
    <div className='flex flex-col w-96'>
          {
            order && order.length > 0 ? order?.[index]?.products.map((product: ProductData) => ( 
              <OrderCard
                id={product.id}
                key={product.id}
                imgUrl={product.image}
                title={product.title}
                price={product.price}
              />
            )
          )
          : <p className='text-center'>No Hay productos en la orden</p>
          }
        </div>
    </>
  )
}