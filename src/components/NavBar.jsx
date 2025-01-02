import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

// i must use mx-auto with container to prevent the scroll effect

const NavBar = () => {
  return (
    <section>
      <div className="container flex flex-row items-center justify-between pt-7">
        <div className="flex flex-row gap-[30px]">
          <img
            src="src/assets/images/logo.svg"
            alt="logo"
            className="w-[100px]"
          />

          <ul className="hidden lg:flex flex-row gap-[15px] font-semibold opacity-[0.7] ">
            <li>
              <div className="flex flex-row items-center  gap-[3px]">
                <p>Features</p>
                <IoIosArrowDown />
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center gap-[3px]">
                <p>Company</p>
                <IoIosArrowDown />
              </div>
            </li>
            <li>careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className=" hidden lg:flex flex-row gap-[20px] opacity-[0.7]">
          <button>Login</button>
          <button className="border-black border-[0.5px] py-2 px-4 rounded-xl">
            Resgister
          </button>
        </div>
        <div className="text-3xl lg:hidden">
          <HiOutlineMenu />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
