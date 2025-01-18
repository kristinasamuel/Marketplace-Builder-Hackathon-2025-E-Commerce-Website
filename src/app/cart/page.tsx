// home // Product add to cart
"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import Warranty from "@/components/warranty";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  //localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  //calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] w-full">
      {/* Banner of cart product */}
      <div
        className="w-full h-[316px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/Image 22.png')" }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Image src={"/images/logo.png"} alt="logo" width={77} height={77} />
          <p className="font-Poppins font-medium text-[48px] text-[#000000]">
            Cart
          </p>
          <div className="flex space-x-3">
            <p className="font-Poppins text-[16px] font-medium text-[#000000]">
              Home
            </p>
            <IoIosArrowForward className="mt-[4px]" />
            <p className="font-Poppins text-[16px] font-medium text-[#000000]">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* Cart items and checkout */}
      <div className="min-h-screen px-4 py-8 flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-[42px] font-bold text-purple-500 text-center mb-8">
            Your Cart
          </h1>

          {cart.length === 0 ? (
            <div className="text-center text-[18px] text-gray-600">
              Your cart is empty.{" "}
              <Link href="/Products" className="text-purple-500">
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Image and Product Details */}
                  <div className="flex items-center">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={100}
                      height={100}
                      className=" object-contain"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium text-[18px] text-purple-600">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-gray-600">
                        Price: ${item.price}
                      </p>
                      <p className="text-[14px] text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <Button
                    onClick={() => removeFromCart(item._id)}
                    variant={"ghost"}
                    className=" text-[14px] rounded-lg"
                  >
                    Remove
                  </Button>
                </div>
              ))}

              {/* Total Price */}
              <div className="mt-6 text-right">
                <p className="text-[18px] text-gray-600 font-medium">
                  Total: ${calculateTotal().toFixed(2)}
                </p>
              </div>

              {/* Checkout Button */}
              <div className="flex justify-center mt-6">
                <Link href="/checkout">
                  <Button className="bg-purple-500 hover:bg-purple-400 text-white text-[16px] rounded-lg">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Warranty Section */}
      <div>
        <Warranty />
      </div>
    </div>
  );
}
