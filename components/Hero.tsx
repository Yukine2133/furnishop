const Hero = () => {
  return (
    <main className="pt-[7.625rem]  lg:pt-[9.75rem] flex flex-col justify-center items-center text-white text-center ">
      <h1 className="text-2xl md:text-3xl md:w-1/2 w-[18.3rem] lg:text-5xl lg:w-[40rem] xl:w-[55rem] xl:text-6xl font-semibold ">
        Creative Home Simplify your Furniture
      </h1>

      <p className=" text-sm md:text-base lg:text-lg w-[18.31rem] md:w-[35rem] xl:w-[30%] mt-[1.875rem] mb-[1.875rem] lg:mb-16">
        Do i have consent to record this meeting gain location, root-and-branch,
        review, nor game plan who’s the goto
      </p>
      <button className="lg:px-20 lg:py-4 px-[2.188rem] py-[0.563rem] backdrop-blur-sm bg-[#E2E2E2] bg-opacity-40 rounded-[5px] lg:rounded-[10px]">
        Shop Now
      </button>
      <div className="bg-dark-teal w-[90%] absolute -bottom-56 md:-bottom-40 lg:-bottom-20 rounded-[20px] grid grid-cols-2  lg:grid-cols-4 place-content-between gap-8 py-[1.2rem] lg:py-[2.375rem] px-4 lg:px-28 text-center">
        <div className="relative">
          <div
            className="border-r-2 lg:pr-24 border-white absolute right-0 top-0 bottom-0 h-full"
            style={{ marginRight: "-8px" }}
          ></div>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-1.5">
            7
          </h2>
          <span className="text-sm md:text-base lg:text-xl">
            Year <br /> Experience
          </span>
        </div>
        <div className="relative">
          <div
            className="lg:border-r-2  lg:pr-24 border-white absolute right-0 top-0 bottom-0 h-full"
            style={{ marginRight: "-8px" }}
          ></div>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-1.5">
            2
          </h2>
          <span className="text-sm md:text-base lg:text-xl">
            Opened in <br /> the country
          </span>
        </div>
        <div className="relative">
          <div
            className="border-r-2  lg:pr-24 border-white absolute right-0 top-0 bottom-0 h-full"
            style={{ marginRight: "-8px" }}
          ></div>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-1.5">
            10k+
          </h2>
          <span className="text-sm md:text-base lg:text-xl">
            Furniture <br /> sold
          </span>
        </div>
        <div className="relative">
          <h2 className="font-semibold text-2xl lg:text-4xl mb-1.5">260+</h2>
          <span className="text-sm md:text-base lg:text-xl">
            Variant <br /> Furniture
          </span>
        </div>
      </div>
    </main>
  );
};

export default Hero;
