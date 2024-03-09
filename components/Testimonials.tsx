import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="mt-20 flex flex-col lg:flex-row justify-center items-center gap-[2.625rem] px-4 lg:px-3 ">
      <section>
        <h2 className="h2 text-blue-gray w-[90%] lg:w-full mb-8 lg:mb-9">
          What People Are Saying About Us
        </h2>
        <div className="flex w-[3.75rem]   h-[3.75rem] lg:w-full lg:h-full items-center gap-5 ">
          <Image
            src="/testimonials/josh.svg"
            alt="Josh Smith"
            width={80}
            height={80}
          />
          <div>
            <h3 className="text-sm md:text-base lg:text-xl font-semibold text-blue-gray mb-1">
              Josh Smith
            </h3>
            <span className="text-[0.625rem] text-nowrap md:text-xs lg:text-sm text-blue-gray text-opacity-50">
              Manager of The New York Times
            </span>
          </div>
        </div>
        <p className="text-xl w-[340px]  lg:w-[570px] mt-7">
          “They are have a perfect touch for make something so professional,
          interest and useful for a lot of people.”
        </p>
        <div className="hidden lg:flex gap-6 mt-8">
          <Image
            src="/testimonials/arrow-left.svg"
            alt="Arrow Left"
            width={38}
            height={38}
            className="shadow-md rounded-full p-2"
          />
          <Image
            src="/testimonials/arrow-right.svg"
            alt="Arrow Right"
            width={36}
            height={36}
            className="bg-dark-teal rounded-full p-2"
          />
        </div>
      </section>
      <section className="mt-8 lg:mt-0">
        <Image
          src="/testimonials/testimonials.svg"
          alt="Testimonials Image"
          width={562}
          height={340}
        />
        <div className="flex items-center justify-center lg:hidden gap-6 mt-8">
          <Image
            src="/testimonials/arrow-left.svg"
            alt="Arrow Left"
            width={38}
            height={38}
            className="shadow-md rounded-full p-2"
          />
          <Image
            src="/testimonials/arrow-right.svg"
            alt="Arrow Right"
            width={36}
            height={36}
            className="bg-dark-teal rounded-full p-2"
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
