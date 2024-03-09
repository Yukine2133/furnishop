import Image from "next/image";
import React from "react";

const BestChoice = () => {
  return (
    <div className="flex px-6 justify-center mt-[8.675rem]">
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto">
        <section className="md:flex justify-center items-center lg:justify-start lg:items-start flex-col">
          <h2 className="h2 text-blue-gray mb-9">
            The Best Furniture <br /> Manufacturer of your choice
          </h2>
          <p className="text-lg md:w-1/2  text-blue-gray">
            Furniture power is a software as services for multipurpose business
            management system, especially for them who are running two or more
            business explore the future Furniture power is a software as
            services.
          </p>
        </section>
        <section className="mt-[3.125rem]">
          <Image
            src="/best-choice.svg"
            alt="Best Choice Image"
            width={554}
            height={399}
            className="w-fit lg:w-[1200px]"
          />
        </section>
      </div>
    </div>
  );
};

export default BestChoice;
