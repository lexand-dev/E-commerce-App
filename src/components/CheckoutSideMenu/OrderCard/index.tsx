import { ShoppingCartContext } from '@/src/Context';
import { XmarkIcon } from '@/src/Icons/Index';
import { ProductData } from '@/src/type/api';
import { useContext } from 'react';

interface OrderCardProps {
  imgUrl: string;
  title: string;
  price: number;
  id: number;
}
type ProductDetailProp = {
  product: ProductData;
};

export const OrderCard = (props : OrderCardProps)   => {
  const { imgUrl, title, price, id }  = props

  const {count,
    setCount, 
    productToCart, 
    setProductToCart,
    } : any  = useContext(ShoppingCartContext);

  const productRemoveFromCart = (e: React.MouseEvent<HTMLDivElement> , id : number) => {
    e.stopPropagation();
    setCount(count - 1)
    setProductToCart(productToCart.filter((item: ProductData) => item.id !== id))
  }

  const renderXmarkIcon = productToCart.length > 0 ? true : false

  return(
    <div className="flex justify-between items-center pb-3 rounded border px-2 py-5 border-black mb-6">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imgUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div>
        <p className='text-lg font-medium'>$ {price}</p>

        
        {
          renderXmarkIcon && <div 
          onClick={(e) => productRemoveFromCart(e, id)}
        >
        <XmarkIcon />
        </div>
        }

      </div>
    </div>
  ) 
}
