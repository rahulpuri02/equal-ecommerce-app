export const fetchCategories = async () => {
    //fetching data from sanity
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`);

    const data = await res.json();
    const categories: Category[] = data.categories;

    return categories;
   
};