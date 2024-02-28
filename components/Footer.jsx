import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F4F4F4] mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10">
          <div className="col-span-1 md:col-span-2 flex items-center md:items-start justify-center md:justify-start ">
            <img src="/Petrov - Logo.png" alt="" className="" />
          </div>
          <div className="col-span-2 flex-col-reverse md:flex-row flex">
            <div className=" md:w-1/2 col-span-1 flex items-center md:items-start  justify-center md:justify-start mt-10">
              <p className="text-[12px] md:text-[16px] font-inter text-[#6D6D6D]">
                © 2023{" "}
                <a
                  href="https://kiratlicreative.com"
                  target="_blank"
                  className="font-medium text-gray-700"
                >
                  Kıratlı Creative Group
                </a>{" "}
                &{" "}
                <a
                  href="https://furkraft.com"
                  target="_blank"
                  className="font-medium text-gray-700"
                >
                  furkraft
                </a>
                . All rights reserved
              </p>
            </div>
            <div className="md:w-1/2 col-span-1 mt-10 flex items-center md:items-end  justify-center md:justify-end gap-4 ">
              <Image
                src="/Instagram.png"
                alt=""
                width={24}
                height={24}
                className="object-cover"
              />
              <Image
                src="/Dribbble.png"
                alt=""
                width={24}
                height={24}
                className="object-cover"
              />
              <Image
                src="/Twitter.png"
                alt=""
                width={24}
                height={24}
                className="object-cover"
              />
              <Image
                src="/Youtube1.png"
                alt=""
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
