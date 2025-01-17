// Home Room Design Section
import { Button } from "./ui/button";
import Image from "next/image";
export default function RoomDesignSection() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center  w-full bg-[#FCF8F3] mt-16 gap-[24px] overflow-hidden ">
      {/* New Dsign Collection detail */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-[100px] ml-0">
        <h3 className="font-Poppins foont-bold w-full sm:w-full md:w-[422px] lg:w-[422px] text-[28px] sm:text-[32px] md:text-[38] lg:text-[40px] text-[#3A3A3A]">
          50+ Beautiful rooms inspiration
        </h3>
        <p className="font-Poppins font-medium text-[16px] text-[#616161] w-full sm:w-full md:w-[368] lg:w-[368px]">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>

        <Button className="w-[176px] h-[48px] bg-[#B88E2F] text-[#FFFFFF] hover:bg-[#dab561] mt-6 ">
          Explore More
        </Button>
      </div>
      {/* New items  */}
      <div className="flex w-full  md:w-auto lg:w-auto h-auto gap-4 justify-center">
        <Image
          src={"/images/design1.png"}
          alt="room design"
          width={404}
          height={582}
        />
      </div>
      <div className="flex flex-col w-full lg:w-auto h-auto items-center gap-4">
        <Image
          src={"/images/design2.png"}
          alt="room design"
          width={372}
          height={486}
        />
            {/* dots  */}
        <div className="gap-4 mt-6 justify-center hidded md:flex lg:flex ">
          <Image src={"/images/Active.png"} alt="dot" width={27} height={27} />
          <Image
            src={"/images/Ellipse 3.png"} alt="dot" width={11} height={11}/>
          <Image src={"/images/Ellipse 3.png"} alt="dot" width={11} height={1}/>
          <Image
            src={"/images/Ellipse 3.png"} alt="dot" width={11} height={1} />
          <Image src={"/images/Ellipse 3.png"} alt="dot" width={11} height={11}/>
        </div>
      </div>
      {/* Right arrow */}
      <div className="justifey-center mt-6 lg:mt-0 hidden md:flex lg:flex ">
        <Image
          src={"/images/Right arrow.png"}
          alt="Arrow"
          width={100}
          height={100}
          className="bg-[#FFFFFF] rounded-full"
        />
      </div>
    </div>
  );
}