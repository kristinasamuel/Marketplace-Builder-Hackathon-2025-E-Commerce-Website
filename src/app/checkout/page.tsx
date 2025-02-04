// Home // Checkout
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2"; // SweetAlert2 for success/failure 

const CheckoutPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  // Handle the form submission
  const handlePlaceOrder = async () => {
    const orderData = {
      _type: "order",
      firstName: orderDetails.firstName,
      lastName: orderDetails.lastName,
      address: orderDetails.address, 
      city: orderDetails.city,
      phone: orderDetails.phone,
      email: orderDetails.email,
      orderDate: new Date().toISOString(),
      cartItems: cart.map(item => ({
        _type: "reference",
        _ref: item._id, 
      })),
      total: totalPrice
      
    };
  
    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
      Swal.fire({
        title: 'Order Created!',
        text: 'Your order has been placed successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error('Error creating order:', error);
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong while placing the order.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    // Calculate the total price
    const total = storedCart.reduce((acc: number, item: any) => acc + item.price, 0);
    setTotalPrice(total);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen px-4 py-8 space-y-6 md:space-y-0 gap-8">
      {/* Order Summary Section */}
      <div className="w-full md:w-1/2 space-y-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-[28px] text-purple-500 font-semibold mb-4">Order Summary</h3>
        {cart.length === 0 ? (
          <p className="text-teal-400 text-[18px]">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <div className="flex items-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    height={100}
                    width={100}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <span>{item.title}</span>
                </div>
                <span>${item.price}</span>
              </div>
            ))}
            <div className="flex justify-between py-2 border-t font-semibold text-lg mt-4">
              <span>Total Amount:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 space-y-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-[34px] text-purple-500 font-semibold mb-4 text-center">Enter Your Details</h3>
        <form className="space-y-4 p-2">
          <div>
            <Label className="block text-lg font-medium text-gray-700 mb-2">First Name</Label>
            <Input
              type="text"
              required
              placeholder="Your Name"
              className="input-field"
              value={orderDetails.firstName}
              onChange={(e) => setOrderDetails({ ...orderDetails, firstName: e.target.value })}
            />
          </div>
          <div>
            <Label className="block text-lg font-medium text-gray-700 mb-2">Last Name</Label>
            <Input
              type="text"
              required
              placeholder="Your Last Name"
              className="input-field"
              value={orderDetails.lastName}
              onChange={(e) => setOrderDetails({ ...orderDetails, lastName: e.target.value })}
            />
          </div>
          <div>
            <Label className="block text-lg font-medium text-gray-700 mb-2">Address</Label>
            <Input
              type="text"
              required
              placeholder="Enter Your Address"
              className="input-field"
              value={orderDetails.address}
              onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
            />
          </div>
          <div>
            <Label className="block text-lg font-medium text-gray-700 mb-2">City</Label>
            <Input
              type="text"
              required
              placeholder="Enter Your City Name"
              className="input-field"
              value={orderDetails.city}
              onChange={(e) => setOrderDetails({ ...orderDetails, city: e.target.value })}
            />
          </div>
          <div>
            <Label className="block text-lg font-medium text-gray-700 mb-2">Phone</Label>
            <Input
              type="text"
              required
              placeholder="Enter Your PhoneNumber"
              className="input-field"
              value={orderDetails.phone}
              onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
            />
          </div>
          <div>
            <Label className="block text-lg font-medium text-gray-700 mb-2">Email</Label>
            <Input
              type="email"
              required
              placeholder="Enter your Email"
              className="input-field"
              value={orderDetails.email}
              onChange={(e) => setOrderDetails({ ...orderDetails, email: e.target.value })}
            />
          </div>
          <Button
            className="w-full text-white text-[20px] rounded-lg bg-green-500 hover:bg-green-600 mt-5 shadow-md transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handlePlaceOrder(); 
            }}
          >
            Placed Order
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

