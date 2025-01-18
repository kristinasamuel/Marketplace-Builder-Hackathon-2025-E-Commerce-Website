// // src/app/Products/[id]/page.tsx
// "use client";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { FaSpinner } from "react-icons/fa6";
// import { useParams } from "next/navigation";

// // Define the Product Type
// interface IProduct {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

// export default function ProductDetailPage() {
//   const params = useParams(); // Extract dynamic route params (e.g., { id: string })
//   const [product, setProduct] = useState<IProduct | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       if (params.id) {
//         const query = `* [_type == "product" && _id == $id] {
//           _id,
//           title,
//           price,
//           description,
//           "imageUrl": productImage.asset->url + "?w=500&h=500&fit=crop"
//         }`;

//         try {
//           // Fetch product data using Sanity client
//           const productDetail = await client.fetch(query, { id: params.id });
//           if (productDetail.length > 0) {
//             setProduct(productDetail[0]);
//           }
//         } catch (error) {
//           console.error("Error fetching product:", error);
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     if (params.id) {
//       fetchProduct();
//     }
//   }, [params.id]); // Depend on params.id to re-fetch when the ID changes

//   // Show loading spinner until the product is fetched
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <FaSpinner className="animate-spin text-purple-500 text-[40px]" />
//       </div>
//     );
//   }

//   // Show message if no product is found
//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-xl">Product not found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col">
//       <div className="flex items-center justify-center lg:justify-start w-full bg-[#F9F1E7] h-[100px] space-x-4 ">
//         <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F] ml-0 sm:ml-[40px] lg:ml-[99px]">
//           Home
//         </p>
//         <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
//           {product.title}
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8 space-y-8 md:space-y-0">
//         {/* Main Image of product */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <Image
//             src={product.imageUrl}
//             alt={product.title}
//             width={400}
//             height={400}
//             className="object-contain"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="w-full md:w-1/2 flex flex-col items-center lg:items-start space-y-2 text-center md:text-left">
//           <h1 className="text-[42px] font-bold text-purple-500">
//             {product.title}
//           </h1>
//           <p className="text-[14px] mt-4">
//             <span className="font-Inter text-[22px] font-medium text-purple-600">
//               Description:
//             </span>
//             {product.description}
//           </p>
//           <p className="text-[24px] text-gray-600">
//             <span className="font-Montserrat text-[32px] font-medium text-purple-600">
//               Price:
//             </span>
//             ${product.price}
//           </p>

//           <div className="flex gap-4 mt-4">
//             <button className="bg-purple-500 text-white px-6 py-2 rounded-lg">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/Products/[id]/page.tsx
"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

// Define the Product Type
interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductDetailPage() {
  const params = useParams(); // Extract dynamic route params (e.g., { id: string })
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (params.id) {
        const query = `* [_type == "product" && _id == $id] {
          _id,
          title,
          price,
          description,
          "imageUrl": productImage.asset->url + "?w=500&h=500&fit=crop"
        }`;

        try {
          // Fetch product data using Sanity client
          const productDetail = await client.fetch(query, { id: params.id });
          if (productDetail.length > 0) {
            setProduct(productDetail[0]);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]); // Depend on params.id to re-fetch when the ID changes

  // Show loading spinner until the product is fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-purple-500 text-[40px]" />
      </div>
    );
  }

  // Show message if no product is found
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center lg:justify-start w-full bg-[#F9F1E7] h-[100px] space-x-4 ">
        <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F] ml-0 sm:ml-[40px] lg:ml-[99px]">
          Home
        </p>
        <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
          {product.title}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8 space-y-8 md:space-y-0">
        {/* Main Image of product */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col items-center lg:items-start space-y-2 text-center md:text-left">
          <h1 className="text-[42px] font-bold text-purple-500">
            {product.title}
          </h1>
          <p className="text-[14px] mt-4">
            <span className="font-Inter text-[22px] font-medium text-purple-600">
              Description:
            </span>
            {product.description}
          </p>
          <p className="text-[24px] text-gray-600">
            <span className="font-Montserrat text-[32px] font-medium text-purple-600">
              Price:
            </span>
            ${product.price}
          </p>

          <div className="flex gap-4 mt-4">
            <Button className="bg-purple-500 text-white px-6 py-2 rounded-lg">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}