// footer of the Hero Sectiom
export default function Footer() {
  return (
  <footer className="flex flex-col w-full h-auto items-center justify-center px-4 sm:px-6 lg:px-10 bg-[#F9F9F9] mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] mt-10 max-w-6xl mx-auto">
    {/* Company Information detail  */}
    <div className="items-center text-center md:text-left">
      <h3 className="font-Poppins font-bold text-[24px] text-[#000000]">
        Funiro.
      </h3>
      <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F] mt-4 sm:mt-10 w-auto sm:w-[285px]">
        400 University Drive Suite 200 Coral Gables, FL 33134 USA
      </p>
    </div>

    {/* Quick Links  */}
    <div className="items-center text-center md:text-left">
      <h2 className="font-Poppins font-medium text-[16px] text-[#9F9F9F]">
        Links
      </h2>
      <ul className="font-Poppins font-medium text-[16px] text-[#000000] space-y-4 sm:space-y-10 mt-4 sm:mt-10">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
      <div className="items-center text-center md:text-left">

      <h2 className="font-Poppins font-medium text-[16px] text-[#9F9F9F]">
        Help
      </h2>
      <ul className="font-Poppins font-medium text-[16px] text-[#000000] space-y-4 sm:space-y-10 mt-4 sm:mt-10">
        <li>Payment Options</li>
        <li>Returns</li>
        <li>Privacy Policies</li>
      </ul>
    </div>
    <div className="items-center text-center md:text-left">

      <h2 className="font-Poppins font-medium text-[16px] text-[#9F9F9F]">
        Newsletter
      </h2>
      
      <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-6">
        <p className="font-Poppins font-normal text-[14px] text-[#9F9F9F] underline underline-offset-2 decoration-[2px] text-center sm:text-left">
          Enter Your Email Address
        </p>
        <p className="font-Poppins font-normal text-[14px] text-[#000000] underline underline-offset-2 decoration-[1px] text-center sm:text-left">
          SUBSCRIBE
        </p>
      </div>
    </div>
  </div>

  {/* Divider line separate the copy right section */}
  <div className="w-full h-[1px] bg-[#D9D9D9] mt-10"></div>
<div className="mt-4 flex justify-center lg:justify-start w-full">
  <p className="text-[14px] text-[#000000] font-Poppins text-center lg:text-left">
    2023 Funiro. All rights reserved
  </p>
</div>
</footer>
  );
}
