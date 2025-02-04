// Home / Our products 
import Image from "next/image"
import { Button } from "./ui/button"
export default function OurProduct() {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="flex items-center">
        <h1 className="font-Poppins text-[40px] font-bold text-center mt-10">Our Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-14">

          {/* Image 1 */}
          <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7] ">
          <Image 
            src={"/images/dis image.png"}
            alt="discount"
            width={48}
            height={48}
            className="absolute top-[16px] right-[16px] z-10"
            
            />
            <Image
            src={"/images/image 1.png"}
            alt="interior"
            width={285}
            height={301}
            
            
            />
            <div className="px-2 mt-4 "> 
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">Syltherine</h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">Stylish cafe chair</p>
            <div className="flex  gap-4 mt-4">
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] ">Rp 2.500.000</p>
               <del>
                <p className="font-Poppins font-normal text-[16px]"> Rp 3.500.000</p>
               </del>
            </div>
            </div>
          </div>
          {/* Image 2 */}
          <div className="flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
            <Image
            src={"/images/image 2.png"}
            alt="interior"
            width={285}
            height={301}
            />
            <div className="px-2 mt-4 "> 
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">Leviosa</h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">Stylish cafe chair</p>
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] mt-4">Rp 2.500.000</p>
            </div>
          </div>
          {/* Image 3 */}
          <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
          <Image 
            src={"/images/Discount-2.png"}
            alt="discount"
            width={48}
            height={48}
            className="absolute top-[16px] right-[16px] z-10"
            
            />
            <Image
            src={"/images/image 3.png"}
            alt="interior"
            width={285}
            height={301}
            
            
            />
            <div className="px-2 mt-4 "> 
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">Lolito</h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">Luxury big sofa</p>
            <div className="flex  gap-4 mt-4">
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] ">Rp 7.000.000</p>
               <del>
                <p className="font-Poppins font-normal text-[16px]">Rp 14.000.000</p>
               </del>
            </div>
            </div>
          </div>
          {/* Image 4 */}
          <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
          <Image 
            src={"/images/New.png"}
            alt="discount"
            width={48}
            height={48}
            className="absolute top-[16px] right-[16px] z-10"
            />
            <Image
            src={"/images/image 4.png"}
            alt="interior"
            width={285}
            height={301}
            />
            <div className="px-3 mt-4 "> 
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">Respira</h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">Outdoor bar table and stool</p>
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] mt-2 ">Rp 500.000</p>
               
            </div>
            </div>
            {/* Image 5 */}
          <div className="flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
            <Image
            src={"/images/Lamp.png"}
            alt="interior"
            width={285}
            height={301}   
            />
            <div className="px-3 mt-4 "> 
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">Grifo</h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2"> Night lamp</p>
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] mt-2 ">Rp 1.500.000</p>    
            </div>
            </div>
            {/* Image 6 */}
          <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
          <Image 
            src={"/images/New.png"}
            alt="discount"
            width={48}
            height={48}
            className="absolute top-[16px] right-[16px] z-10"  
            />
            <Image
            src={"/images/Images 4.png"}
            alt="interior"
            width={285}
            height={301} 
            />
            <div className="px-3 mt-4 "> 
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">Cute bed set</h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2"> Small mug</p>
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] mt-2 ">Rp 150.000</p>
               
            </div>
            </div>
            {/* Image 7 */}
          <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
          <Image 
            src={"/images/Discount-2.png"}
            alt="discount"
            width={48}
            height={48}
            className="absolute top-[16px] right-[16px] z-10" 
            />
            <Image
            src={"/images/bedset.png"}
            alt="interior"
            width={285}
            height={301}
            />
            <div className="px-3 mt-4 "> 
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">Pingky</h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2"> Cute bed set</p>
<div className="flex  gap-4 mt-4">
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] ">Rp 7.000.000</p>
               <del>
                <p className="font-Poppins font-normal text-[16px]">Rp 14.000.000</p>
               </del>
            </div>               
            </div>
            </div>
            {/* Image 8 */}
          <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
          <Image 
            src={"/images/New.png"}
            alt="discount"
            width={48}
            height={48}
            className="absolute top-[16px] right-[16px] z-10"
            
            />
            <Image
            src={"/images/image 8.png"}
            alt="interior"
            width={285}
            height={301}
            
            
            />
            <div className="px-3 mt-4 "> 
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">Potty</h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2"> Minimalist flower pot</p>
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] mt-2 ">Rp 500.000</p>
               
            </div>
            </div>          
          </div>
          <div className="flex items-center justify-center mt-10">
<Button className="w-[245px] h-[48px] border border-[#B88E2F] hover:bg-gray-300  text-[16px] font-Poppins font-semibold text-[#B88E2F] bg-[#ffffff]"> Show More

</Button> 
          </div>
        </div>
   
  )
}