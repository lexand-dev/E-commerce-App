'use client'
import { ShoppingCartContext } from '@/src/Context'
import { XmarkIcon } from '@/src/Icons/Index'
import { OrderCard } from '@/src/components/CheckoutSideMenu/OrderCard/index'
import { ProductData } from '@/src/type/api'
import { totalPrice } from '@/src/utils/index'
import Link from 'next/link'
import { useContext } from 'react'
import './styles.css'



export const CheckoutSideMenu = () => {
  const { 
          isCheckoutSideOpen, 
          handleCheckoutSideClose,
          productToCart,
          setProductToCart,
          setCount,
          order,
          setOrder
        } : any = useContext(ShoppingCartContext) 

  const handleCheckoutOrder = () => {
    const orderToAdd = {
      date: '2021-10-10',
      products: productToCart,
      totalProducts: productToCart.length,
      totalPrice: totalPrice(productToCart)
  }
    setOrder([...order, orderToAdd])
    setProductToCart([])
    setCount(0)
    handleCheckoutSideClose()
}

  return (
    <aside className={` ${isCheckoutSideOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg p-6`} >
      <div className='flex justify-between items-center pb-4'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div
          className='cursor-pointer'
          onClick={() => handleCheckoutSideClose()}
        >
        <XmarkIcon />
        </div>
      </div>
        <div className='px-2 overflow-y-scroll flex-1'>
          {
            productToCart.map((product: ProductData) => ( 
              <OrderCard 
                id={product.id}
                key={product.id}
                imgUrl={product.image}
                title={product.title}
                price={product.price}
              />
            )
          )
          }
        </div>
        <div className='px-2 pt-3'>
          <p className='flex justify-between items-center'>
            <span className='font-light'>Subtotal:</span>
            <span className='font-medium text-2xl'>$ {totalPrice(productToCart)}</span>
          </p>
          <Link href='/my-orders/last'>
          <button
            className='bg-black text-white w-full py-3 mt-4 rounded-lg'
            onClick={() => handleCheckoutOrder()}
          >
            <span className='font-medium text-xl'>Checkout</span>
          </button>
          </Link>
        </div>

    </aside>
)
}
