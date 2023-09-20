"use client";
import { ShoppingCartContext } from "@/src/Context";
import { ShoppingCartIcon } from "@/src/Icons/Index";
import { Category, Order } from "@/src/const";
import { usePathname } from 'next/navigation';
import { useContext } from "react";
import { Nav } from "./Nav";

export default function NavBar() {
  const { count } : any = useContext(ShoppingCartContext);
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex gap-3 items-center">
          {
            Category.map((item) => {
              const isActive = pathname === item.href
            return(
              <Nav key={item.literal} href={item.href} literal={item.literal} color={isActive ? 'underline font-semibold' : ''} />
            )})
          }
      </ul>
        <ul className="flex gap-3 items-center">
        {
            Order.map((item) => { 
              const isActive = pathname === item.href
            return(
              <Nav key={item.literal} href={item.href} literal={item.literal} color={isActive ? 'underline font-semibold' : ''} />
            )})
          }
        <li className="flex items-center justify-center gap-1">
          <ShoppingCartIcon />
            <div>
            {count}
            </div>
        </li>
        </ul>
    </nav>
  )
}
