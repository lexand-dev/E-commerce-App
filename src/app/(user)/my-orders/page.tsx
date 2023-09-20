'use client'
import { ShoppingCartContext } from "@/src/Context";
import { OrdersCard } from "@/src/components/OrdersCard";
import Link from "next/link";
import { useContext } from "react";

interface OrderCard {
  totalPrice: number;
  totalProducts: number;
  date: string;
}

export default function MyOrders() {
  const { 
    order
  } : { order: OrderCard[] } = useContext(ShoppingCartContext) 
  return (
    <>
      <h1 className='text-lg font-medium mb-4'>My Orders</h1>
      <div className="w-80 h-full">
      {
        order.map((order: OrderCard, index) => (
          <Link href={`/my-orders/${index}`} key={index} className="mb-8">
            <OrdersCard 
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date={order.date}
            />
          </Link>
        ))
      }
      </div>
    </>
  )
}
