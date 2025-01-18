// Home // new product
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default async function ProductPage() {
  // Fetch products
  const query = await client.fetch(
    `*[_type == "product"]{
      _id,
      title,
      description,
      "imageUrl": productImage.asset->url + "?w=500&h=500&fit=crop",
      tag,
      price,
      dicountPercentage,
      isNew
    }`
  );
  console.log(query);
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center lg:justify-start w-full bg-[#F9F1E7] h-[100px] space-x-4 ">
        {/* left content Detail, logo */}

        <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F] ml-0 sm:ml-[40px] lg:ml-[99px]">
          Home
        </p>
        <IoIosArrowForward />
        <p className="font-Poppins font-normal text-[16px] text-[#000000]">
          New Product
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* New Products Section */}
        <h1 className="text-[40px] text-purple-500 font-bold text-center mb-8 mt-5">
          New Products
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {query.map((product: any) => (
            <Card
              key={product._id}
              className="w-full p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <h2 className="text-xl font-bold mb-4 text-center">
                {product.title}
              </h2>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={400}
                height={300}
                loading="eager"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <p className="font-bold mt-2 ml-4">Price :${product.price}</p>

              {/* New products */}
              {product.isNew && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full absolute top-2 right-2">
                  New
                </span>
              )}
              {/* Product detail  */}
              <Link href={`/Products/${product._id} `}>
                <p className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700 transition-colors">
                  View Product detail
                </p>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
