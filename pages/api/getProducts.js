import { groq } from "next-sanity";
import { sanityClient} from "../../sanity";


//getting data from sanity 

const query = groq`*[_type == "product"] {
  _id,
    ...
  } | order(_createdAt asc)`;




export default async function handler(req,res) {
  const products = await sanityClient.fetch(query);
  //console.log(products);
  res.status(200).json({products});

}