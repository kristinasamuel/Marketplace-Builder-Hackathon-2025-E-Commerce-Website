// Home / Shop / Asgarrd Sofa single product section
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
export default function NewProductsSection() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FFFFFF]">
      {/* Active page detail */}
      <div className="flex items-center justify-center lg:justify-start w-full bg-[#F9F1E7] h-[100px] space-x-4 ">
        {/* left content Detail, logo */}

        <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F] ml-0 sm:ml-[40px] lg:ml-[99px]">
          Home
        </p>
        <IoIosArrowForward/>
        <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
          Shop
        </p>
        <IoIosArrowForward/>
        <Image
          src={"/images/line 5.png"}
          alt="logo"
          height={20}
          width={1}
          className="w-[1px] h-auto border-2  border-solid border-[#9F9F9F]"
        />
        <p className="font-Poppins font-normal text-[16px] text-[#000000]">
          Asgaard sofa
        </p>
      </div>
      {/* New Product detial  */}
      <div className="flex flex-col lg:flex-row items-start justify-start w-full mt-20 px-4 lg:px-0">
        {/* left side Images of products */}
        <div className="flex flex-row items-center lg:items-start w-full lg:w-[1241.01px] lg:h-[730] lg:ml-[99px]">
          <div className="flex flex-col h-[416px] w-[76px] gap-6">
            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rouned-[10px] flex items-center justify-center">
              <Image src="/images/sofa 2.png" alt="k" width={76} height={80} />
            </div>
            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rouned-[10px] flex items-center justify-center">
              <Image
                src="/images/sofa set3.png"
                alt="sofa"
                width={76}
                height={80}
              />
            </div>
            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rouned-[10px] flex items-center justify-center">
              <Image
                src="/images/Stuart sofa 1.png"
                alt="sofa"
                width={76}
                height={80}
              />
            </div>
            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rouned-[10px] flex items-center justify-center">
              <Image src="/images/sofa.png" alt="sofa" width={76} height={80} />
            </div>
          </div>
          <div className="w-full lg:w-[418px] h-auto lg:h-[500px] bg-[#F9F1E7] ml-10 flex rounded-[10px] items-center justify-center">
            <Image
              src={"/images/Asgaard sofa 3.png"}
              alt="sofa"
              width={418}
              height={391}
            />
          </div>
        </div>
        {/* Right Side Detail Of The Product */}
        <div className="w-full sm:w-full md:w-[606.01px] lg-w-[606.01px] h-auto lg:h-[730px] items-center justify-center  lg:items-start lg:justify-start">
          <h3 className=" font-Poppins font-normal text-[28px] sm:text-[28px] md:text-[32px] lg:text-[42px] text-[#000000]">
            Asgaard sofa
          </h3>
          <p className="font-Poppins font-medium text-[16px] sm:text-[16px] md:text-[24px] lg:text-[24px] text-[#9F9F9F]">
            Rs. 250,000.00
          </p>
          <div className="flex mt-2 gap-2">
            <Image src={"/images/star.png"} alt="star" height={18} width={18} />
            <Image src={"/images/star.png"} alt="star" height={18} width={18} />
            <Image src={"/images/star.png"} alt="star" height={18} width={18} />
            <Image src={"/images/star.png"} alt="star" height={18} width={18} />
            <Image src={"/images/star.png"} alt="star" height={18} width={18} />
            <Image
              src={"/images/line 5.png"}
              alt="logo"
              height={20}
              width={1}
              className="w-[1px] h-auto border-2  border-solid border-[#9F9F9F] ml-2"
            />
            <p className="font-Poppins font-normal text-[13px] text-[#9F9F9F] text-center">
              5 Customer Review
            </p>
          </div>
          <div>
            <p className="font-Poppins font-normal text-[13px] text-[#000000] w-[424px] mt-3">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <p className="font-Poppins font-normal text-[14px] text-[#9F9F9F] mt-3">
              Size
            </p>
            <div className="flex mt-3 gap-4">
              <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[4px] bg-[#B88E2F]">
                <h1 className="font-Poppins font-normal text-[#FFFFFF] text-[13px] items-center">
                  L
                </h1>
              </div>
              <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[4px] bg-[#F9F1E7]">
                <h1 className="font-Poppins font-normal text-[#000000] text-[13px]">
                  XL
                </h1>
              </div>
              <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[px] bg-[#F9F1E7]">
                <h1 className="font-Poppins font-normal text-[#000000] text-[13px]">
                  XS
                </h1>
              </div>
            </div>
            <div>
              <p className="font-Poppins font-normal text-[14px] text-[#9F9F9F] mt-2">
                Color
              </p>
            </div>
            <div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={"/images/round2.png"}
                  alt="round"
                  height={30}
                  width={30}
                />
                <Image
                  src={"/images/round3.png"}
                  alt="round"
                  height={30}
                  width={30}
                />
                <Image
                  src={"/images/round.png"}
                  alt="round"
                  height={30}
                  width={30}
                />
              </div>
              <div className="flex flex-wrap gap-5">
                <div className="flex gap-2 mt-5">
                  <div className="flex items-center justify-center w-[123px] h-[64px] rounded-[10px] border border-solid border-[#9F9F9F] space-x-6">
                    <p className="font-Poppins font-normal text-[16px] text-[#000000]">
                      -
                    </p>
                    <p className="font-Poppins font-normal text-[16px] text-[#000000]">
                      1
                    </p>
                    <p className="font-Poppins font-normal text-[16px] text-[#000000]">
                      +
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-5">
                  <div className="flex items-center justify-center w-[215px] h-[64px] rounded-[10px] border border-solid border-[#9F9F9F]">
                    <p className="font-Poppins font-normal text-[20px] text-[#000000]">
                      Add To Cart
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-5">
                  <div className="flex items-center justify-center w-[215px] h-[64px] rounded-[10px] border border-solid border-[#9F9F9F]">
                    <div className="flex space-x-2">
                      <p className="font-Poppins font-normal text-[23px] text-[#000000]">
                        +
                      </p>
                      <p className="font-Poppins font-normal text-[20px] text-[#000000]">
                        Compare
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* divider */}
              <div className="mt-10">
                <Image
                  src={"/images/Line 7.png"}
                  alt="line"
                  height={1}
                  width={605.01}
                />
              </div>
              {/* Detail of the products */}
              <div className="flex flex-col items-start ustify-start space-y-2 mt-10">
                <div className="flex space-x-10">
                  <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                    SKU
                  </p>
                  <div className="flex space-x-2">
                    <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                      :
                    </p>
                    <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                      SS001
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                    Category
                  </p>
                  <div className="flex space-x-2">
                    <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                      :
                    </p>
                    <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                      Sofas
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-10">
                  <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                    Tags
                  </p>
                  <div className="flex space-x-2">
                    <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                      :
                    </p>
                    <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                      Sofa, Chair, Home, Shop
                    </p>
                  </div>
                </div>
                <div className="flex space-x-10">
                  <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                    Sofa, Chair, Home, Shop
                  </p>
                  <div className="flex space-x-2">
                    <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                      :
                    </p>
                    <div className="flex gap-4">
                      <Image
                        src={"/images/facebook.png"}
                        alt="icon"
                        height={20}
                        width={20}
                      />
                      <Image
                        src={"/images/Linkdin.png"}
                        alt="icon"
                        height={20}
                        width={20}
                      />
                      <Image
                        src={"/images/twitter.png"}
                        alt="icon"
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="w-full flex flex-col  items-center justify-center bg-[#FFFFFF] mt-20">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center space-x-4">
          <p className="font-Poppins text-[24px] font-medium text-[#000000]">
            Description
          </p>
          <p className="font-Poppins text-[24px] font-medium text-[#9F9F9F] ">
            Additional Information
          </p>
          <p className="font-Poppins text-[24px] font-medium text-[#9F9F9F]">
            Reviews [5]
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 space-y-4 p-4 md:p-0 lg:p-0">
          <p className="font-Poppins text-[16px] font-normal text-[#9F9F9F] w-full sm:w-full  md:w-[860px] lg:w-[860px]">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="font-Poppins text-[16px] font-normal text-[#9F9F9F]  w-full sm:w-full md:w-[860px] lg:w-[860px]">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4  mt-10">
          <div className="bg-[#F9F1E7] w-full h-auto md:h-[348px] md:w-[504px] lg:h-[348px] lg:w-[604px] items-center justify-center">
            <Image
              src={"/images/cloudsofa2.png"}
              alt="cloud sofa"
              height={828}
              width={551}
              className="w-full h-auto"
            />
          </div>
          <div className="bg-[#F9F1E7] w-full h-auto md:h-[348px] md:w-[504px]  lg:h-[348px] lg:w-[604px] items-center justify-center">
            <Image
              src={"/images/cloudsofa.png"}
              alt="cloud sofa"
              height={657}
              width={436}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      {/* Our New Product Images */}
      <div className="w-full flex flex-col  items-center justify-center bg-[#FFFFFF] mt-20">
        <h3 className="font-Poppins font-medium text-[20px] sm:text-[24px] md:text-[36px] lg:text-[36px] text-[#000000]">
          Related Products
        </h3>

        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-col-4  gap-6 mt-14 mb-4">
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
          {/* Image 2 */}
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
      </div>
    </div>
  );
}