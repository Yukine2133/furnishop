import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[6.25rem] mt-72 md:mt-60 lg:mt-[6.625rem] overflow-hidden px-4 ">
      <section>
        <Image
          src="/services.svg"
          alt="Services Image"
          width={554}
          height={443}
          className="object-contain"
        />
      </section>
      <section>
        <h2 className="h2  w-[21.25rem] text-center lg:text-start lg:w-[31.75rem] mb-[0.875rem]">
          We Create your home more aesthetic
        </h2>
        <span className="w-[21.25rem]  md:w-[25rem] lg:w-[36.69rem] text-lg block ">
          Furnitre power is a software as services for multiperpose business
          management system.
        </span>
        <div className="space-y-8    mt-[2.1875rem]">
          <div className="flex gap-4">
            <Image
              src="/checklist.svg"
              alt="CheckList Icon"
              width={32}
              height={32}
            />
            <div>
              <h3 className="md:text-lg mb-2.5 lg:mb-2 lg:text-xl font-semibold">
                Valuation Services
              </h3>
              <p className="text-sm  w-[18.25rem]  lg:w-[29.19rem] block">
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src="/checklist.svg"
              alt="CheckList Icon"
              width={32}
              height={32}
            />
            <div>
              <h3 className="md:text-lg mb-2.5 lg:mb-2 lg:text-xl font-semibold">
                Development of Furniture Modelss
              </h3>
              <p className="text-sm w-[18.25rem] lg:w-[29.19rem] inline-block">
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
