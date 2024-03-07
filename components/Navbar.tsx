import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="pt-7 px-6 lg:px-24 xl:px-[8.125rem] flex justify-between text-white ">
      <h1 className="text-2xl lg:text-4xl font-bold">FurniShop</h1>
      <ul className="gap-8 lg:gap-16  hidden md:flex">
        <li className="font-semibold">Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
      <button className="md:hidden">
        <Image src="/menu.svg" alt="Menu" width={24} height={24} />
      </button>
    </nav>
  );
};

export default Navbar;
