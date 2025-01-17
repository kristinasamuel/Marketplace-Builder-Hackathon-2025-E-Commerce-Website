// Home / Contact Page
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Warranty from "@/components/warranty";

export default function ContactPage() {
  return (
    <div className="flex flex-col  w-full  overflow-hidden">
      {/* Logo and background image */}
      <div
        className="w-full h-[316px] bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: "url('/images/Image 22.png')" }}
      >
        <div className="flex flex-col  items-center justify-center">
          <Image src={"/images/logo.png"} alt="logo" width={77} height={77} />
          <p className="font-Poppins font-medium text-[48px] text-[#000000]">
            Contact
          </p>
          <div className="flex  space-x-3">
            <p className="font-Poppins text-[16px] font-medium text-[#000000]">
              Home
            </p>
            <IoIosArrowForward className="mt-[4px]" />
            <p className="font-Poppins text-[16px] font-medium text-[#000000]">
              Contact
            </p>
          </div>
        </div>
      </div>
      {/* Main heading of the page */}
      <div className="bg-[#FFFFFF] flex flex-col items-center justify-center  mt-10 lg:mt-20  ">
        <h3 className="font-semibold font-Poppins text-[24px] sm:text-[28px] md:text-[36px] lg:text-[36px]  mt-10 lg:mt-20text-center text-[#000000]">
          Get In Touch With Us
        </h3>
        <p className="font-Poppins font-normal text-[16px] text-center text-[#9F9F9F] w-full lg:w-[600px] mt-4">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full items-center md:items-start lg:items-start justify-center bg-[#FFFFFF]">
        {/* Contact Detail Address,Service or Time */}
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-[393px] h-[537px] gap-8">
          <div className="flex flex-row space-x-6 ">
            <FaLocationDot className="w-[22px] h-[27.59px]" />
            <div className="">
              <h3 className="font-Poppins font-normal text-[24px]">Address</h3>
              <p className="w-[190px] font-Poppins font-normal text-[16px]">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-6 ">
            <FaPhone className="w-[22.27px] h-[22.27px]" />
            <div className="">
              <h3 className="font-Poppins font-normal text-[24px]"> Phone</h3>
              <p className="w-[200px] font-Poppins font-normal text-[16px]">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-6 ">
            <MdAccessTimeFilled className="w-[22px] h-[27.59px]" />
            <div className="">
              <h3 className="font-Poppins font-normal text-[24px]">
                {" "}
                Working Time
              </h3>
              <p className="w-[200px] font-Poppins font-normal text-[16px]">
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        {/* Input Form */}
        <div className="w-full lg:w-[531px] mt-10 lg:mt-0 p-4 lg:p-0">
          <form className="w-full">
            <Label className="font-Poppins font-medium text-[16px]">
              Your name
            </Label>
            <Input
              type="Text"
              placeholder="Abc"
              className="text-[16px] font-Poppins text-[#9F9F9F] mt-5 rounded-[10px] h-[75px] w-full lg:w-[528.75px] border border-solid border-[#9F9F9F] mb-6"
            />

            <Label className="font-Poppins font-medium text-[16px]">
              Email address
            </Label>
            <Input
              type="Text"
              placeholder="Abc@def.com"
              className="text-[16px] font-Poppins text-[#9F9F9F] mt-5 rounded-[10px] h-[75px] w-full lg:w-[528.75px] border border-solid border-[#9F9F9F] mb-6"
            />

            <Label className="font-Poppins font-medium text-[16px]">
              Subject
            </Label>
            <Input
              type="Text"
              placeholder="This is an optional"
              className="text-[16px] font-Poppins text-[#9F9F9F] mt-5 rounded-[10px] h-[75px] w-full lg:w-[528.75px] border border-solid border-[#9F9F9F] mb-6"
            />

            <Label className="font-Poppins font-medium text-[16px]">
              Message
            </Label>
            <Input
              type="Message"
              placeholder="Hi! i'd like to ask about"
              className="text-[16px] font-Poppins text-[#9F9F9F] mt-5 rounded-[10px] h-[120px] w-full lg:w-[528.75px] border border-solid border-[#9F9F9F] mb-6"
            />
            <Button className="w-[327px] h-[55px] bg-[#B88E2F] text-[#FFFFFF] hover:bg-[#dab561] mt-6 ">
              Submit
            </Button>
          </form>
        </div>
      </div>
      {/* Use Warranty section as components */}
      <div>
        <Warranty />
      </div>
    </div>
  );
}