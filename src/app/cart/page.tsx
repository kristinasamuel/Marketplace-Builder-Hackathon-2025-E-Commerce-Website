// home / Cart section
import { Button } from "@/components/ui/button";
import Warranty from "@/components/warranty";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
export default function page() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFFFFF] w-full">
      {/* Active page details  */}
      <div
        className="w-full h-[316px] bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: "url('/images/Image 22.png')" }}
      >
        <div className="flex flex-col  items-center justify-center">
          <Image src={"/images/logo.png"} alt="logo" width={77} height={77} />
          <p className="font-Poppins font-medium text-[48px] text-[#000000]">
            Cart
          </p>
          <div className="flex  space-x-3">
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
      {/* Product detail section price and quantitiy */}
      {/* <div className="flex flex-col md:flex-row lg:flex-row  items-center justify-center lg:items-start gap-6 w-full mt-20">
        <div className=" w-full h-auto lg:w-[817px] lg:h-[215px] ml-0 sm:ml-[50px] md:ml-[100px]  lg:ml-[100px] ">
          <div className="w-full bg-[#F9F1E7] h-[55px] grid grid-cols-4 items-center text-center rounded-[10px] px-4">
            <p className="font-Poppins font-medium text-[16px] text-[#000000]">
              Product
            </p>
            <p className="font-Poppins font-medium text-[16px] text-[#000000]">
              Price
            </p>
            <p className="font-Poppins font-medium text-[16px] text-[#000000]">
              Quantity
            </p>
            <p className="font-Poppins font-medium text-[16px] text-[#000000]">
              Subtotal
            </p>
          </div>

          <div className="flex flex-col  lg:flex-row  mt-16 items-center gap-12">
            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center">
              <Image
                src="/images/Asgaard sofa 5.png"
                alt="Asgaard"
                width={111}
                height={90}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
              <p className="font-Poppins font-medium text-[16px] text-[#9F9F9F]">
                Asgaard sofa
              </p>
              <p className="font-Poppins font-medium text-[16px] text-[#9F9F9F]">
                Rs. 250,000.00
              </p>
              <div className="w-[32px] h-[32px] rounded-[5px] border border-solid border-[#9F9F9F] flex items-center justify-center ml-0 lg:ml-16">
                <p className="font-Poppins font-medium text-[16px] text-[#000000]">
                  1
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-12 ml-0 lg:ml-20">
                <p className="font-Poppins font-medium text-[16px] text-[#000000]">
                  Rs. 250,000.00
                </p>

                <div className="flex items-center lg:items-start justify-center">
                  <Image
                    src="/images/gift.png"
                    alt="Gift"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[393px] h-[390px] bg-[#F9F1E7] flex flex-col items-center rounded-[10px] p-6">
          <h4 className="font-semibold font-Poppins text-[22px] sm:text-[24px] md:text-[32px] lg:text-[32px] text-[#000000] mb-6">
            Cart Totals
          </h4>
          <div className=" flex flex-col items-center gap-4 mt-16">
            <div className="flex space-x-10">
              <p className="font-Poppins font-medium text-[16px] text-[#000000]">
                Subtotal
              </p>
              <p className="font-Poppins font-medium text-[16px] text-[#9F9F9F]">
                Rs. 250,000.00
              </p>
            </div>
            <div className="flex space-x-10">
              <p className="font-Poppins font-medium">Total</p>
              <p className="font-Poppins font-medium text-[20px] text-[#B88E2F]">
                Rs. 250,000.00
              </p>
            </div>
            <Button className="w-[222px] h-[58.95px] rounded-[15px] border border-[#000000] bg-[#F9F1E7] hover:bg-[#e0d4c4] text-[#000000] text-[20px] font-Poppins font-normal mt-5">
              Check Out
            </Button>
          </div>
        </div>
      </div> */}

      <div>
        <Warranty />
      </div>
    </div>
  );
}
