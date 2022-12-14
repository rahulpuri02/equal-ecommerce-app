import { Tab } from '@headlessui/react'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import Product from '../components/Product'
import Cart from '../components/Cart';
import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'
import { getSession } from "next-auth/react";

const Home = ({categories, products}) => {
  ///console.log(categories)
  //console.log(products)
 
  const showProducts = (category) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };
  
  return (
    <div>
         <Head>
        <title>Equal E-Commerce | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/> 

      <Cart/>
      <main className='relative h-[200vh] bg-[#e7ecee]'>
        <LandingPage/>
      </main>

      {/*Landing Page-2 Starts From Here*/}

      <section className='relative z-30 -mt-[100vh] min-h-screen bg-[#1b1b1b]'>
        <div className='space-y-10 py-16 '>
        <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
       New Promos
       </h1>
       <Tab.Group>
       <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-4 text-sm font-light outline-none md:py-[13px] md:px-5 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
      <Tab.Panels className="mx-auto max-w-fit pt-10 pb-[55px] sm:px-4">
      <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
      <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
      <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
      <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
        </div>
      </section>
    </div>
  )
}

export default Home;

  {/* Server Side Rendering starts from here */}

  export const getServerSideProps = async (context) => {
  //fetch the data from sanity
 const categories = await fetchCategories();
 const products = await fetchProducts();
 const session = await getSession(context);
    return {
      props: {
        categories,
        products,
        session,
      },
    };
  };