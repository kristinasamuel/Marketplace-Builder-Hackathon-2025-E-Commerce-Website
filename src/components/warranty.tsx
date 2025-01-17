//  home Wrranty product or sevices detail section
import Image from "next/image"
export default function Warranty() {
  return (
    <div className="w-full h-auto lg:h-[270px] flex items-center justify-center p-[100px] bg-[#FAF3EA] mt-10">
           <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center space-y-10 lg:space-x-14 ">
          <div className="flex gap-4">
            <Image
              src={"/images/trophy 1.png"}
              alt="Trophy"
              width={60}
              height={60}
            />
            <div className="flex flex-col"> 
              <h3 className="font-Poppins font-semibold text-[25px] text-[#242424] w-[157px]">
                High Quality
              </h3>
              <p className="font-Poppins font-medium text-[20px] text-[#898989]">
                crafted from top materials
              </p>
              </div>
            </div>
          <div className="flex gap-4">
            <Image
              src={"/images/guarantee.png"}
              alt="guarranty"
              width={60}
              height={60}
            />
            <div className="flex flex-col">
              <h3 className="font-Poppins w-full lg:w-[258px] font-semibold text-[25px] text-[#242424]">
                Warranty Protection
              </h3>
              <p className="font-Poppins font-medium text-[20px] text-[#898989]">
                Over 2 years
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/images/shipping.png"}
              alt="Trophy"
              width={60}
              height={60}
            />
            <div className="flex flex-col">
              <h3 className="font-Poppins w-[174px] font-semibold text-[25px] text-[#242424]">
                Free Shipping
              </h3>
              <p className="font-Poppins font-medium text-[20px] text-[#898989]">
                Order over 150 $
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/images/customer-support.png"}
              alt="Trophy"
              width={60}
              height={60}
            />
            <div className="flex flex-col">
              <h3 className="font-Poppins font-semibold text-[25px] w-[177px] text-[#242424]">
                24 / 7 Support
              </h3>
              <p className="font-Poppins font-medium text-[20px] text-[#898989]">
                Dedicated support
              </p>
            </div>
          </div>
          </div>
        </div>
  )
}