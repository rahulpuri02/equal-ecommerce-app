export const fetchProducts = async () => {
    //fetching data from sanity
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`);

    const data = await res.json();
    const products = data.products;

    return products;
   
};