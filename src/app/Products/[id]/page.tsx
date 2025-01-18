// Home // products / product Detail page
"use client";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
 
interface IProducts {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  price: number;
  discountPercentage: number;
  isNew: boolean;
} 
export default function ProductDetailPage() {
  const [product, setProduct] = useState<any | null>(null);
  const { id } = useParams(); // Use `useParams()` to access `id` from the URL
  const [cart, setCart] = useState<any[]>([]);
  const [isAdded, setIsAdded] = useState(false);
  const query = `* [_type == "product" && _id == $id] {
    _id,
    title,
    price,
    description,
    tags,
    "imageUrl": productImage.asset->url + "?w=500&h=500&fit=crop",
  }`;
  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const productDetail = await client.fetch(query, { id });
        setProduct(productDetail[0]); // Set the product state with the fetched data
      };
      fetchProduct(); // Fetch product data
    }
  }, [id]); // Re-run when `id` changes

  const HandleAddToCart = () => {
    if (!product) return;
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const productAdded = currentCart.findIndex(
      (item: IProducts) => item._id === product._id
    );

    if (productAdded !== -1) {
      currentCart[productAdded].quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));

    setCart(currentCart);

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };
  if (!product) {
    return (
      // loading
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-purple-500 text-[40px]" />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center lg:justify-start w-full bg-[#F9F1E7] h-[100px] space-x-4 ">
        <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F] ml-0 sm:ml-[40px] lg:ml-[99px]">
          Home
        </p>
        <IoIosArrowForward />
        <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
          New Product
        </p>
        <IoIosArrowForward />
        <Image
          src={"/images/line 5.png"}
          alt="logo"
          height={20}
          width={1}
          className="w-[1px] h-auto border-2  border-solid border-[#9F9F9F]"
        />
        <p className="font-Poppins font-normal text-[16px] text-[#000000]">
          Product Detail
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8 space-y-8 md:space-y-0">
        {/*side images of product*/}
        <div className=" space-y-4 ml-10 hidden md:flex lg:flex flex-col ">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={100}
            height={100}
          />
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={100}
            height={100}
          />
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={100}
            height={100}
          />
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={100}
            height={100}
          />
        </div>
        {/* Main Image of product */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain "
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col items-center lg:items-start space-y-2 text-center md:text-left">
          <h1 className="text-[42px] font-bold text-purple-500">
            {product.title}
          </h1>
          <p className="text-[14px] mt-4">
            <span className="font-Inter text-[22px] font-medium text-purple-600  ">
              Description:
            </span>
            {product.description}
          </p>
          <p className="text-[24px] text-gray-600">
            <span className="font-Montserrat text-[32px] font-medium text-purple-600  ">
              Price:
            </span>
            ${product.price}
          </p>
          <div className="flex mt-2 gap-2">
            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
            <Image
              src={"/images/line 5.png"}
              alt="logo"
              height={20}
              width={1}
              className="w-[1px] h-auto border-2  border-solid border-[#9F9F9F] ml-2"
            />
            <p className="font-Poppins font-normal text-[13px] text-[#9F9F9F] text-center mt-1">
              5 Customer Review
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={HandleAddToCart}
              className="text-[16px] bg-purple-500 hover:bg-purple-400 "
            >
              Add to Cart
            </Button>
            <Link href={"/Products"}>
              {" "}
              <p className="text-[17px] bg-purple-500 hover:bg-purple-400 text-center p-2 text-[#ffffff] rounded-lg ">
                Go Back
              </p>
            </Link>
          </div>
          {isAdded && (
            <div className="mt-5 text-[19px] italic">
              <p>Product Added to cart successfully!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
