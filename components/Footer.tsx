import { footer, socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-gray w-full px-6 lg:px-[5rem] xl:px-[9.375rem] py-16 text-white ">
      <div className="flex lg:items-center flex-col lg:flex-row lg:justify-between">
        <h2 className="text-2xl font-bold">FurniShop</h2>
        <div className="flex items-center mt-5 gap-6 lg:gap-4 ">
          {socials.map((item) => (
            <Image
              src={item.image}
              alt="Social Icon"
              key={item.id}
              width={48}
              height={48}
              className="bg-[#6D5DD3] bg-opacity-10 rounded-full  p-4  "
            />
          ))}
        </div>
      </div>
      <hr className="bg-[#EAEEF3] hidden lg:block mt-[3.75rem] mb-16 " />
      <div className="grid mt-12 lg:mt-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:place-items-center gap-[4.875rem] lg:gap-0">
        {footer.map((item) => (
          <div key={item.id}>
            <h3 className="text-lg font-medium">{item.h3}</h3>
            <div className="space-y-3 mt-6">
              {item.h4.map((heading) => (
                <h4 className="text-sm " key={heading}>
                  {heading}
                </h4>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
