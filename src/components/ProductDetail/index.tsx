'use client'
import { ShoppingCartContext } from '@/src/Context'
import { XmarkIcon } from '@/src/Icons/Index'
import { useContext } from 'react'
import './styles.css'



export const ProductDetail = () => {
  const { showProductDetail, 
          isProductDetailOpen, 
          handleProductDetailClose 
        } : any = useContext(ShoppingCartContext) 

  return (
    <aside className={` ${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg p-6`} >
      <div className='flex justify-between items-center '>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div
          className='cursor-pointer'
          onClick={() => handleProductDetailClose()}
        >
        <XmarkIcon />
        </div>
      </div>
      {showProductDetail && typeof showProductDetail === 'object' && (
        <figure>
          <img 
          src={showProductDetail.image} 
          alt={showProductDetail.title} 
          className='w-full h-96 bg-center bg-cover rounded-lg' 
          />
          <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>{showProductDetail.title}</span>
            <span className='font-medium text-md'>{showProductDetail.price}</span>
            <span className='font-light text-sm'>{showProductDetail.description}</span>
          </p>
        </figure>
)}
    </aside>
)}
