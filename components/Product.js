
//import Image from 'next/image';
//import { urlFor } from '../sanity';

import Image from "next/image"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { urlFor } from "../sanity"


function Product({product}) {

  const addToBasket = () => {
  
  }
  
  return (
    <div className="flex h-fit w-[330px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-6 md:h-[500px] md:w-[400px] md:p-9">
   <div className="relative h-64 w-full md:h-72">
      <Image src={urlFor(product.image[0]).url()} layout="fill" objectFit="contain" />
    </div>

    <div className="flex flex-1 items-center justify-between space-x-3">
      <div className="space-y-2 text-xl text-white md:text-2xl ">
        <p className="whitespace-nowrap">{product.title}</p>
        <p>${product.price}</p>
      </div>

      <div onClick={addToBasket} className="shopping-bag">
        <HiOutlineShoppingCart className="h-8 w-8 text-white" />
      </div>
    </div>
    </div>
  )
}

export default Product