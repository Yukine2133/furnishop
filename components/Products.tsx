import { products } from "@/constants";
import Image from "next/image";

const Products = () => {
  return (
    <div className="flex flex-col px-4 justify-center items-center mt-[6rem]">
      <section className="text-center mb-[4.325rem]">
        <h2 className="h2 mb-4 text-blue-gray">All Product</h2>
        <p className="text-blue-gray w-[340px] md:w-[539px]">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world
        </p>
      </section>
      <section className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((item, index) => (
          <div className={`${index === 3 && "mb-6 lg:mb-16"}`} key={item.id}>
            <div className="relative">
              <Image
                src={item.image}
                alt={item.heading}
                width={285}
                height={292}
                className="border rounded-2xl  "
              />
              <Image
                src="/products/plus.svg"
                alt="Plus Icon"
                width={24}
                height={24}
                className="absolute bottom-3 md:bottom-4 right-4 md:right-6 bg-blue-gray bg-opacity-10 rounded-full p-1"
              />
            </div>
            <h3 className="text-base md:text-xl lg:text-2xl font-semibold mt-4 text-blue-gray ">
              {item.heading}
            </h3>
            <div className="flex items-center gap-4">
              <p className="text-blue-gray text-xs md:text-base">
                ${item.priceNow}.00
              </p>
              <span className="line-through text-[0.625rem] md:text-sm  text-blue-gray text-opacity-20">
                ${item.priceThen}.00
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
