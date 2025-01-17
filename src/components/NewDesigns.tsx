// home/ new deisgn section
import Image from "next/image";
export default function NewDesignsSection() {
  return (
    <div className="w-full mt-16 overflow-hidden">
      {/* Mian heading of the section */}
      <div className="flex flex-col items-center">
        <h3 className="font-poppins font-bold text-[20px] text-center text-[#616161]">
          Share your setup with
        </h3>
        <h4 className="font-Poppins font-bold text-[40px] text-center text-[#3A3A3A]">
          #FuniroFurniture
        </h4>
      </div>
      
      <div className="mt-16">
  {/* First Row: 5 Images in one line */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-8">
    
    <div className="w-full">
      <Image
        src="/images/design 1.png"
        alt="design"
        width={274}
        height={382}
        className="w-full h-auto"
      />
    </div>
    <div className="w-full">
      <Image
        src="/images/Image 38.png"
        alt="design"
        width={451}
        height={312}
        className="w-full h-auto"
      />
    </div>
    <div className="w-full">
      <Image
        src="/images/design 3.png"
        alt="design"
        width={295}
        height={600}
        className="w-full h-auto"
      />
    </div>
    <div className="w-full">
      <Image
        src="/images/image 43.png"
        alt="design"
        width={290}
        height={348}
        className="w-full h-auto"
      />
    </div>
    <div className="w-full ">
      <Image
        src="/images/design2.png"
        alt="design"
        width={420}
        height={433}
        className="w-full h-auto"
      />
    </div>
  </div>

  {/* Second Row: 4 Images */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
    <div className="w-full">
      <Image
        src="/images/image 37.png"
        alt="design"
        width={381}
        height={323}
        className="w-full h-auto"
      />
    </div>
    <div className="w-full">
      <Image
        src="/images/image 39.png"
        alt="design"
        width={344}
        height={242}
        className="w-full h-auto"
      />
    </div>
    <div className="w-full">
      <Image
        src="/images/image 41.png"
        alt="design"
        width={178}
        height={242}
        className="w-full h-auto"
      />
    </div>
    <div className="w-full">
      <Image
        src="/images/image 44.png"
        alt="design"
        width={258}
        height={196}
        className="w-full h-auto"
      />
    </div>
  </div>
</div> 
    </div>
  );
}