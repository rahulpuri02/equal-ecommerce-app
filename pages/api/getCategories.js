import { groq } from "next-sanity";
import { sanityClient} from "../../sanity";


//getting data from sanity 

const query = groq`*[_type == "category"] {
  _id,
    ...
  } | order(_createdAt asc)`;




export default async function handler(req,res) {
  const categories = await sanityClient.fetch(query);
  //console.log(categories);
  res.status(200).json({categories});

}