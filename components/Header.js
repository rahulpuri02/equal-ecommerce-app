
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {BiSearchAlt2, BiShoppingBag} from 'react-icons/bi';
import {HiOutlineUser} from 'react-icons/hi'
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import { signIn, signOut, useSession} from "next-auth/react";

function Header() {
  const {data: session} = useSession();

  const items = useSelector(selectCartItems);
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
     <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src="https://res.cloudinary.com/dzj8cmkhl/image/upload/v1665859773/e-commerce-app/Apple_logo_black.svg_ie4qfy.png"
              layout="fill"
              objectFit="contain"
              alt="equal-ecommerce"
            />
          </div>
          </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
    <span className="headerLink">Products</span>
    <span className="headerLink">Explore</span>
    <span className="headerLink">Support</span>
    <span className="headerLink">Business</span>
    </div>
    <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
      <BiSearchAlt2 className='headerIcon'/>
      <Link href='/checkout'>
      <div className='relative cursor-pointer'>
      {items.length > 0 &&
      (<span className='absolute -right-1 -top-1 z-20 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[11px] text-white'>
        {items.length}
      </span>)}
      <BiShoppingBag className='headerIcon' />
      </div>
      </Link>
      
      {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={28}
            height={28}
            onClick={() => signOut()}
          />
        ) : (
        <HiOutlineUser onClick={() => signIn()} className='headerIcon'/>
      )}
    </div> 
    </header>
  );
}

export default Header;