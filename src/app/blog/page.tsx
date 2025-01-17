// Home / Blog Page

import { Input } from "@/components/ui/input";
import Warranty from "@/components/warranty";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
export default function BlogPage() {
  return (
    <div className="flex flex-col items-center w-full justify-center overflow-hidden">
      {/* Detail of the page Active */}
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
              Blog
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mt-10 md:mt-14 lg:mt-32 gap-4 lg:gap-8">
        {/* left side blog post */}
        <div className=" w-full lg:w-[820] h-full  bg-[#FFFFFF] space-y-20">
          {/* image 1 */}
          <div className="flex flex-col items-center justify-center w-full lg:w-[820px] h-auto lg:h-[794] lg:justify-start lg:items-start">
            <Image
              src={"/images/blogImage.png"}
              alt="post"
              height={500}
              width={817}
            />
            <div className="flex flex-row items-center justify-cente gap-2 lg:gap-4 mt-3">
              <div className="flex gap-2">
                <Image
                  src={"/images/admin-users.png"}
                  alt="icon"
                  height={20}
                  width={20}
                  className="w-full h-auto"
                />
                <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                  Admin
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/tag 3.png"}
                  alt="icon"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                  14 Oct 2022
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/tag 2.png"}
                  alt="icon"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                  Wood
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start  items-center justify-center lg:justify-start mt-4 lg:mt-2">
              <h3 className="font-Poppins font-medium text-[20px]  lg:text-[30px] text-[#000000]">
                {" "}
                Going all-in with millennial design
              </h3>
              <p className="font-Poppins font-normal text-[15px] w-full lg:w-[820px] lg:text-left mt-2 lg:mt-4 text-[#9F9F9F] p-2 lg:p-0 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="font-Poppins tex-[16px] font-normal text-[#000000] mt-2 lg:mt-5">
                Read more
              </p>
              <Image
                src={"/images/Line 13.png"}
                alt="line"
                width={77}
                height={1}
                className="mt-2"
              />
            </div>
          </div>
          {/* image 2 */}
          <div className="flex flex-col  items-center justify-center w-full lg:w-[820px]  h-full lg:h-[794px] lg:justify-start lg:items-start">
            <Image
              src={"/images/blogImage 2.png"}
              alt="post"
              height={500}
              width={817}
              className="w-full h-auto"
            />
            <div className="flex flex-row items-start gap-4 mt-3">
              <div className="flex gap-2">
                <Image
                  src={"/images/admin-users.png"}
                  alt="icon"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                  Admin
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/tag 3.png"}
                  alt="icon"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                  14 Oct 2022
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/tag 2.png"}
                  alt="icon"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                  Wood
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start mt-2">
              <h3 className="font-Poppins font-medium text-[20px] lg:text-[30px] text-[#000000]">
                Exploring new ways of decorating
              </h3>
              <p className="font-Poppins font-normal text-[15px] w-full lg:w-[820px] mt-2 lg:mt-4 text-[#9F9F9F] p-2 lg:p-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="font-Poppins tex-[16px] font-normal text-[#000000] mt-5">
                Read more
              </p>
              <Image
                src={"/images/Line 13.png"}
                alt="line"
                width={77}
                height={1}
                className="mt-2"
              />
            </div>
          </div>
          {/* image 3 */}
          <div className="flex flex-col items-center justify-center w-full md:items-start md:justify-start lg:w-[820px] h-full  lg:h-[794px] lg:justify-start lg:items-start">
            <Image
              src={"/images/blogImage3.png"}
              alt="post"
              height={500}
              width={817}
              className="w-full h-auto"
            />
            <div className="flex flex-row items-start gap-4 mt-3">
              <div className="flex gap-2">
                <Image
                  src={"/images/admin-users.png"}
                  alt="icon"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                  Admin
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/tag 3.png"}
                  alt="icon"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                  14 Oct 2022
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/images/tag 2.png"}
                  alt="icon"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                  Wood
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start mt-2">
              <h3 className="font-Poppins font-medium  text-[20px] lg:text-[30px] text-[#000000]">
                Handmade pieces that took time to make
              </h3>
              <p className="font-Poppins font-normal text-[15px] w-full lg:w-[820px] mt-3 lg:mt-4 text-[#9F9F9F] p-2 lg:p-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="font-Poppins tex-[16px] font-normal text-[#000000] mt-5">
                Read more
              </p>
              <Image
                src={"/images/Line 13.png"}
                alt="line"
                width={77}
                height={1}
                className="mt-2"
              />
            </div>
          </div>
        </div>
        {/* Right side : Category , blog post detail */}
        <div className="flex flex-col items-center justify-center ">
          <div className="w-full h-full lg:w-[393px] lg:h-[537px] bg-[#FFFFFF]">
            <div className="relative w-full lg:w-[311px] p-4 lg:p-0">
              <Input
                type="text"
                className="border border-solid border-[#9F9F9F] w-full lg:w-[313px] h-[58px] rounded-[10px] pl-4 pr-12  text-sm sm:text-base"
              />
              <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 w-[24px] h-[24px] mr-6 md:mr-0 lg:mr-0" />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-auto lg:w-[251px] lg:h-[353px] mt-5">
              <div className="flex flex-col items-start">
                <h1 className="font-Poppins font-medium text-[24px] text-center text-[#000000]">
                  Categories
                </h1>
                <div className="font-Poppins font-normal text-[16px] text-[#9F9F9F] space-y-8 mt-4 text-center">
                  <div className="flex space-x-28">
                    <p>Crafts</p>
                    <p>2</p>
                  </div>
                  <div className="flex space-x-28">
                    <p>Design</p>
                    <p>8</p>
                  </div>
                  <div className="flex space-x-20">
                    <p>Handmade</p>
                    <p>7</p>
                  </div>
                  <div className="flex space-x-28">
                    <p>Interior</p>
                    <p>1</p>
                  </div>
                  <div className="flex space-x-28">
                    <p>Wood</p>
                    <p>6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Posts Details */}
          <div className="w-[393px] h-[650px] bg-[#FFFFFF] mt-8 lg:mt-10 flex justify-center">
            <div className="flex flex-col items-start justify-start px-4">
              <h1 className="font-Poppins font-medium text-[24px] text-center text-[#000000] gap-12">
                Recent Posts
              </h1>
              <div className="flex flex-col mt-10 space-y-12">
                <div className="flex flex-row gap-4">
                  <Image
                    src={"/images/post1.png"}
                    alt="post image"
                    height={80}
                    width={80}
                  />
                  <div className="mt-2 space-y-2">
                    <h3 className="font-Poppins font-normal text-[14px] text-[#000000] w-[119px] ">
                      Going all-in with millennial design
                    </h3>
                    <p className="font-Poppins font-normal text-[12px] text-[#9F9F9F]">
                      03 Aug 2022
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Image
                    src={"/images/post2.png"}
                    alt="post image"
                    height={80}
                    width={80}
                  />
                  <div className="mt-2 space-y-2">
                    <h3 className="font-Poppins font-normal text-[14px] text-[#000000] w-[149px] ">
                      Exploring new ways of decorating
                    </h3>
                    <p className="font-Poppins font-normal text-[12px] text-[#9F9F9F]">
                      03 Aug 2022
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Image
                    src={"/images/post3.png"}
                    alt="post image"
                    height={80}
                    width={80}
                  />
                  <div className="mt-2 space-y-2">
                    <h3 className="font-Poppins font-normal text-[14px] text-[#000000] w-[160px] ">
                      Handmade pieces that took time to make
                    </h3>
                    <p className="font-Poppins font-normal text-[12px] text-[#9F9F9F]">
                      03 Aug 2022
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Image
                    src={"/images/post4.png"}
                    alt="post image"
                    height={80}
                    width={80}
                  />
                  <div className="mt-2 space-y-2">
                    <h3 className="font-Poppins font-normal text-[14px] text-[#000000] w-[119px] ">
                      Modern home in Milan
                    </h3>
                    <p className="font-Poppins font-normal text-[12px] text-[#9F9F9F]">
                      03 Aug 2022
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Image
                    src={"/images/post5.png"}
                    alt="post image"
                    height={80}
                    width={80}
                  />
                  <div className="mt-2 space-y-2">
                    <h3 className="font-Poppins font-normal text-[14px] text-[#000000] w-[119px] ">
                      Colorful office redesign
                    </h3>
                    <p className="font-Poppins font-normal text-[12px] text-[#9F9F9F]">
                      03 Aug 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pages number  */}
      <div className="flex flex-row items-center ju
      stify-center w-full lg:w-[392px] h-[60px] mt-14 gap-4 lg:gap-8">
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
      {/* Warranty Section used as components */}
      <div>
        <Warranty />
      </div>
    </div>
  );
}