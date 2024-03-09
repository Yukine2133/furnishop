import { store } from "@/constants";
import Image from "next/image";

const Store = () => {
  return (
    <div className="mt-[6.25rem] flex-col lg:flex-row flex items-center justify-between mb-[20rem]">
      <section className="px-6 gap-5 mb-6 lg:mb-0 flex lg:flex-col justify-between items-center lg:justify-start lg:items-start  lg:px-[5rem] xl:px-[6.25rem]">
        <h2 className="h2 w-full lg:mb-[5.567rem]">
          New In <br /> Store Now
        </h2>
        <p className="text-blue-gray xl:w-2/3  lg:mb-12">
          Get the latest items immediately with promo prices
        </p>
        <span className=" hidden lg:flex font-medium text-blue-gray underline items-center gap-2.5">
          Check All{" "}
          <span>
            <Image
              src="/store/arrow-right.svg"
              alt="Arrow Right"
              width={20}
              height={20}
            />
          </span>{" "}
        </span>
      </section>
      <section className="flex gap-5">
        {store.map((item, index) => (
          // Only render the third and fourth images on larger screens
          <div
            className={`w-fit last:hidden md:block lg:last:block first:pl-6  ${
              index === 2 && "hidden lg:block"
            }`}
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.heading}
              width={265}
              height={400}
              className="w-auto"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Store;
