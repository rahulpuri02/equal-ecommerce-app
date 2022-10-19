import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {FiCheck} from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';
import Button from "../components/Button";
import {BiShoppingBag} from "react-icons/bi";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md"
import { fetchOrderItems } from '../utils/fetchOrderItems';


function success({products}) {
    console.log(products);
    let session = false;
    const router = useRouter();
    const {session_id} = router.query;
    const [mounted, setMounted] = useState(false);
    const [showOrderSummary, setShowOrderSummary] = useState(false);

    //showOrderSummary only true for desktop but only conditionally true on mobile
    const isTabletOrMobile = useMediaQuery({query: "(max-width: 1024px)"});
    const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;

    useEffect(() => {
        setMounted(true);
    }, [])

    const handleShowOrderSummary = () => {
        setShowOrderSummary(!showOrderSummary);
    }

  return (
    <div>
      <Head>
        <title>Thank You | Equal E-Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-auto max-w-xl">
         {/*  for smaller screen img-logo*/}
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden">
            <Image
               src="https://res.cloudinary.com/dzj8cmkhl/image/upload/v1665859773/e-commerce-app/Apple_logo_black.svg_ie4qfy.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-9">
        <section className="success-section">
            {/*  for larger screen img-logo*/}
          <Link href="/">
            <div className="relative ml-14 hidden h-24 w-12 cursor-pointer transition lg:inline-flex">
              <Image
                src="https://res.cloudinary.com/dzj8cmkhl/image/upload/v1665859773/e-commerce-app/Apple_logo_black.svg_ie4qfy.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>

          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
              <FiCheck className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Order #{session_id?.slice(-6)}
              </p>
              <h4 className="text-lg">
                Thank You{" "}
                {session ? session.user?.name?.split(" ")[0] : "Guest"}
              </h4>
            </div>
          </div>

          <div className="mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
              <p>Your order is confirmed</p>
              <p className="text-sm text-gray-600">
                We’ve accepted your order, and we’re getting it ready. Come back
                to this page for updates on your shipment status.
              </p>
            </div>
            <div className="pt-3 text-sm">
              <p className="font-medium text-gray-600">
                Other tracking number:
              </p>
              <p>AM19091002</p>
              </div>
          </div>

          <div className="my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14">
            <p>Order updates</p>
            <p className="text-sm text-gray-600">
              You’ll get shipping and delivery updates by email and text.
            </p>
          </div>
          <div className="mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row">
            <p className="hidden lg:inline">Need help? Contact us</p>
            {mounted && (
              <Button
                title="Continue Shopping"
                onClick={() => router.push("/")}
                width={isTabletOrMobile ? "w-full" : undefined}
                padding="py-4"
              />
            )}
          </div>
        </section>

        {mounted && (
          <section className="overflow-y-scroll border-y border-l border-gray-300 bg-[#FAFAFA] lg:order-2 lg:col-span-4 lg:h-screen lg:border-y-0">
            <div
              className={`w-full ${
                showOrderSummaryCondition && "border-b"
              } border-gray-300 text-sm lg:hidden`}
            >
              <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-6">
                <button
                  onClick={handleShowOrderSummary}
                  className="flex items-center space-x-2"
                >
                  <BiShoppingBag className="h-6 w-6" />
                  <p>Show order summary</p>
                  {showOrderSummaryCondition ? (
                    <MdKeyboardArrowUp className="h-4 w-4" />
                  ) : (
                    <MdKeyboardArrowDown className="h-4 w-4" />
                  )}
                </button>

                <p className='text-xl font-medium text-black'> </p>
                    </div>
                </div>

                {showOrderSummaryCondition && (
                    <div>
                        <div></div>
                    </div>
                )}
            </section>
        )}
        
      </main>
    </div>
  );
}

export default success


{/* Server Side Rendering   */}

export const getServerSideProps =  async ({query}) => {
    const sessionId = query.session_id
    const products = await fetchOrderItems(sessionId)
   return {
    props: {
     products,
    },
   }
}