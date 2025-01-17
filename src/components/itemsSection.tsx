// home / new items section
import Image from "next/image";
export default function ItemsSection() {
  return (
    <div className="flex flex-col w-full mt-10 justify-center items-center overflow-hidden">
      <div className=" flex flex-col items-center justify-center  ">
        <h4 className="font-Poppins font-bold text-[32px] text-[#333333]">
          Browse The Range
        </h4>
        <p className="font-Poppins font-normal  text-center text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#666666] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* Image 1 Dinning */}
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center mt-10 gap-6">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/images/image 106.png"}
            alt="interior"
            width={381}
            height={480}
          />
          <p className="font-Poppins font-semibold text-[24px] text-center text-[#333333] mt-4">
            Dining
          </p>
        </div>
        {/* Image 2 living */}

        <div className="flex flex-col  items-center justify-center">
          <Image
            src={"/images/image 100.png"}
            alt="interior"
            width={381}
            height={480}
          />
          <p className="font-Poppins font-semibold text-[24px] text-center text-[#333333] mt-4">
            Living
          </p>
        </div>
        {/* Image 3 bedroom */}

        <div className="flex flex-col   items-center justify-center">
          <Image
            src={"/images/image 106.png"}
            alt="interior"
            width={381}
            height={480}
          />
          <p className="font-Poppins font-semibold text-[24px] text-center text-[#333333] mt-4">
            Bedroom
          </p>
        </div>
      </div>
    </div>
  );
}