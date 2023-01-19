// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const query = groq`*[_type == "category"] {
  _id,
    ...
  }`;

type Data = {
  categories: Category[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   const categories = await sanityClient.fetch(query);
}
