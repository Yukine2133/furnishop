const Contact = () => {
  return (
    <div className="w-full bg-[50%] relative  bg-cover bg-no-repeat h-[600px] mt-20 bg-[url(/contact.svg)]">
      <div className="text-white absolute min-[500px]:right-20 md:right-52 top-[30%] lg:right-5 2xl:right-48 text-center lg:text-start pl-2">
        <h2 className="h2 mx-auto lg:mx-0 w-2/3 lg:w-[22rem] mb-5">
          Get more discount Off your order
        </h2>
        <p className="text-xl mx-auto  ">Join our mailing list</p>
        <div className="mt-10 flex gap-5 items-center">
          <input
            className="bg-white rounded-lg py-5 w-[220px] lg:w-[384px] px-6"
            placeholder="Your email address"
          />
          <button className="text-xl font-semibold bg-blue-gray text-white rounded-lg py-5 px-6">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
