'use client'
import { ShoppingCartContext } from "@/src/Context";
import { CheckBadgeIcon, PlusIcon } from "@/src/Icons/Index";
import { type ProductData } from "@/src/type/api";
import { useContext } from "react";


type ProductDetailProps = {
  product: ProductData;
};



export default function Card({product}: ProductDetailProps) {

  const {count,
        setCount, 
        handleProductDetailOpen,
        setShowProductDetail, 
        productToCart, 
        setProductToCart,
        handleCheckoutSideOpen,
        handleCheckoutSideClose
        } : any  = useContext(ShoppingCartContext);


    const toggleProductDetail = ({product} : ProductDetailProps) => {
      handleProductDetailOpen();
      setShowProductDetail(product)
      handleCheckoutSideClose()
    }

    const productAddToCart = (e: React.MouseEvent<HTMLDivElement> , {product} : ProductDetailProps) => {
      e.stopPropagation();
      setCount(count + 1)
      setProductToCart([...productToCart, product])
      handleCheckoutSideOpen()
    }

    

    const renderIcon = (id : number) => {
      const isProductInCart = productToCart.filter((item: ProductData) => item.id === id).length > 0;
      if(isProductInCart) {
        return(
          <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
        >
          <CheckBadgeIcon />
        </div>
        )
      } else {
        return(
          <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
          onClick={(e,) => productAddToCart(e, {product})}
        >
          <PlusIcon />
        </div>
        )
      }
    }

    
  return (
    <div 
      className='bg-white cursor-pointer w-56 h-80 rounded-lg border-slate-800 border '
      onClick={() => toggleProductDetail({product})}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-xs text-black  m-2 p-1'>{product.category}</span>
        <img src={product.image} className="w-full h-full object-cover bg-cover rounded-lg" alt="headphones" />
          <div className="w-6 h-6">
          {renderIcon(product.id)} 
          </div>
      </figure>
      <p className='flex justify-between mx-3'>
        <span className='text-xs font-normal w-40'>{product.title}</span>
        <span className='text-lg font-medium'>${product.price}</span>
      </p>
    </div>
  )
}
