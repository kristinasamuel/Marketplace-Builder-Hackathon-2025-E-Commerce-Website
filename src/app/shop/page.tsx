// Home /Shop Page
import Warranty from "@/components/warranty";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
export default function ShopPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Page details  */}
      <div
        className="w-full  h-[316px] bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: "url('/images/Image 22.png')" }}
      >
        <div className="flex flex-col  items-center justify-center">
          <Image src={"/images/logo.png"} alt="logo" width={77} height={77} />
          <p className="font-Poppins font-medium text-[48px] text-[#000000]">
            Shop
          </p>
          <div className="flex  space-x-3">
            <p className="font-Poppins text-[16px] font-medium text-[#000000]">
              Home
            </p>
            <IoIosArrowForward className="mt-[4px]" />
            <p className="font-Poppins text-[16px] font-medium text-[#000000]">
              Shop
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center justify-between w-full bg-[#F9F1E7] h-[100px] hidden md:flex ">
        {/* Left Content page detail  detail */}
        <div className="flex items-center gap-4 ml-[98px]">
          <Image
            src={"/images/system-1.png"}
            alt="logo"
            height={20}
            width={20}
          />
          <p className="font-Poppins font-normal text-[20px] text-[#000000]">
            Filter
          </p>
          <Image src={"/images/grid.png"} alt="grid" height={20} width={20} />
          <Image src={"/images/view.png"} alt="view" height={20} width={20} />
          <Image
            src={"/images/line 5.png"}
            alt="line"
            height={20}
            width={1}
            className="w-[1px] h-auto border-2 border-solid border-[#9F9F9F]"
          />
          <p className="font-Poppins font-normal text-[16px] text-[#000000]">
            Showing 1-16 of 32 results
          </p>
        </div>

        {/* Right Content */}
        <div className="flex items-center gap-4 mr-[98px]">
          <h3 className="font-Poppins font-normal text-[20px] text-[#000000]">
            Show
          </h3>
          <div className="flex items-center justify-center bg-[#FFFFFF] w-[55px] h-[55px]">
            <p className="font-Poppins font-normal text-[20px] text-[#9F9F9F]">
              16
            </p>
          </div>
          <h3 className="font-Poppins font-normal text-[20px] text-[#000000]">
            Sort by
          </h3>
          <div className="flex items-center justify-center w-[188px] h-[55px] bg-[#FFFFFF]">
            <p className="font-Poppins font-normal text-[#9F9F9F] text-[20px]">
              Default
            </p>
          </div>
        </div>
      </div>
      {/* New products detail  */}
      <div className="grid grid-col-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-col-4  gap-6 mt-16 ">
        {/* image 1 */}
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
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">
              Syltherine
            </h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">
              Stylish cafe chair
            </p>
            <div className="flex  gap-4 mt-4">
              <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] ">
                Rp 2.500.000
              </p>
              <del>
                <p className="font-Poppins font-normal text-[16px]">
                  {" "}
                  Rp 3.500.000
                </p>
              </del>
            </div>
          </div>
        </div>
        {/* image 2 */}
        <div className="flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
          <Image
            src={"/images/image 2.png"}
            alt="interior"
            width={285}
            height={301}
          />
          <div className="px-2 mt-4 ">
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">
              Leviosa
            </h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">
              Stylish cafe chair
            </p>

            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] mt-4">
              Rp 2.500.000
            </p>
          </div>
        </div>
        {/* image 3 */}
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
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">
              Lolito
            </h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">
              Luxury big sofa
            </p>
            <div className="flex  gap-4 mt-4">
              <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] ">
                Rp 7.000.000
              </p>
              <del>
                <p className="font-Poppins font-normal text-[16px]">
                  Rp 14.000.000
                </p>
              </del>
            </div>
          </div>
        </div>
        {/* image 4 */}
        <div className=" relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
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
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">
              Respira
            </h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">
              Outdoor bar table and stool
            </p>
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] mt-2 ">
              Rp 500.000
            </p>
          </div>
        </div>
        {/* image 5 */}
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
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">
              Syltherine
            </h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">
              Stylish cafe chair
            </p>
            <div className="flex  gap-4 mt-4">
              <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] ">
                Rp 2.500.000
              </p>
              <del>
                <p className="font-Poppins font-normal text-[16px]">
                  {" "}
                  Rp 3.500.000
                </p>
              </del>
            </div>
          </div>
        </div>
        {/* image 6 */}
        <div className="flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
          <Image
            src={"/images/image 2.png"}
            alt="interior"
            width={285}
            height={301}
          />
          <div className="px-2 mt-4 ">
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">
              Leviosa
            </h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">
              Stylish cafe chair
            </p>

            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] mt-4">
              Rp 2.500.000
            </p>
          </div>
        </div>
        {/* image 7 */}
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
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">
              Lolito
            </h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">
              Luxury big sofa
            </p>
            <div className="flex  gap-4 mt-4">
              <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] ">
                Rp 7.000.000
              </p>
              <del>
                <p className="font-Poppins font-normal text-[16px]">
                  Rp 14.000.000
                </p>
              </del>
            </div>
          </div>
        </div>
        {/* image 8 */}
        <div className=" relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
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
            <h3 className="font-Poppins font-semibold text-[24px] text-[#3A3A3A] ">
              Respira
            </h3>
            <p className="font-Poppins font-medium text-[16px] text-[#898989] mt-2">
              Outdoor bar table and stool
            </p>
            <p className="text-[#3A3A3A] font-Poppins font-semibold text-[20px] mt-2 ">
              Rp 500.000
            </p>
          </div>
        </div>
      </div>
      {/* number of pages  */}
      <div className="flex flex-row items-center justify-center w-full lg:w-[392px] h-[60px] mt-14 gap-4 lg:gap-8">
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-[10px] bg-[#B88E2F]">
          <h1 className="font-Poppins font-normal text-[#FFFFFF] text-[20px] items-center">
            1
          </h1>
        </div>
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7]">
          <h1 className="font-Poppins font-normal text-[#000000] text-[20px]">
            2
          </h1>
        </div>
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7]">
          <h1 className="font-Poppins font-normal text-[#000000] text-[20px]">
            3
          </h1>
        </div>
        <div className="flex items-center justify-center w-[98px] h-[60px] rounded-[10px] bg-[#F9F1E7]">
          <h1 className="font-Poppins font-normal text-[#000000] text-[20px]">
            Next
          </h1>
        </div>
      </div>
      {/*Use warranty section  */}
      <div>
        <Warranty />
      </div>
    </div>
  );
}