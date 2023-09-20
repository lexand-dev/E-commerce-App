import { ShoppingCartContext } from '@/src/Context';
import Link from 'next/link';
import { useContext } from 'react';
export const Nav = ({href,literal, color}: {href: string, literal: string, color: string}) => {
  const {setFilteredByCategory } = useContext(ShoppingCartContext);
  return(
    <li
      onClick={() => setFilteredByCategory(literal)}
      className={color}>
        <Link href={href}>
          {literal}
        </Link>
    </li> 
  )
}