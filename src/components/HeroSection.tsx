// home / hero section
import { Button } from "@/components/ui/button";
export default function HeroSection() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center sm:bg-cover md:bg-cover overflow-hidden lg:bg-center"
      style={{ backgroundImage: "url('/images/heroImage.png')" }}>
      {/* detail of the products */}
      <div className="flex items-center justify-center"> 
      <div className="w-full h-auto sm:w-full sm:h-auto md:h-[443px] lg:h-[443px] rounded-[10px] bg-[#FFF3E3]  p-4 items-start ml-0 lg:ml-[600px]  top-[253px] ">
        <div className=" flex flex-col p-4 lg:p-10">
          <h3 className="font-Poppins font-semibold text-[16px] text-[#333333]">
            New Arrival
          </h3>
          <h4 className="font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] w-full lg:w-[400px] items-center text-[#B88E2F]">
            Discover Our New Collection
          </h4>
          <p className="font-Poppins font-medium text-[18px] text-[#333333] w-full lg:w-[530px] h-[52px] mt-2 lg:mt-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button 
          className="w-[180px] h-[50px] sm:w-[180px] sm:h-[50px] lg:w-[222px] lg:h-[74px] p-0 px-[25px] bg-[#B88E2F] hover:bg-[#dab561] font-Poppins font-bold text-[14px]
           sm:text-[14px] lg:text-[16px] text-[#FFFFFF] mt-14 s:mt-14 md:mt-10 lg:mt-10">
            BUY Now
          </Button>
         
        </div>
      </div>
      </div>
    </section>
  );
}