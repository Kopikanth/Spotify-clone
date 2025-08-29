import { assets } from "../assets/assets";

const NavBar = () => {

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
            <img src={assets.arrow_left} alt="arrow_left" className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
            <img src={assets.arrow_right} alt="arrow_right" className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-4">
            <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;