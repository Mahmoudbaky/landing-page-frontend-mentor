import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Menu from "./Menu";
import CompanyMenu from "./CompanyMenu";

// i must use mx-auto with container to prevent the scroll effect

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [company, setCompany] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleCompany = () => {
    setCompany(!company);
  };

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
              <div
                onClick={handleMenu}
                className="flex flex-row items-center gap-[3px] hover:opacity-100 hover:cursor-pointer"
              >
                <p>Features</p>
                <div>{menu ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                {menu && (
                  <div className="absolute left-[200px] top-[60px] rounded-lg bg-white ">
                    <Menu />
                  </div>
                )}
              </div>
            </li>
            <li>
              <div
                onClick={handleCompany}
                className="flex flex-row items-center gap-[3px] hover:opacity-100 hover:cursor-pointer"
              >
                <p>Company</p>
                {company ? <IoIosArrowUp /> : <IoIosArrowDown />}
                {company && (
                  <div className="absolute left-[300px] top-[60px] bg-white">
                    <CompanyMenu />
                  </div>
                )}
              </div>
            </li>
            <li className="hover:opacity-100 hover:cursor-pointer">careers</li>
            <li className="hover:opacity-100 hover:cursor-pointer">About</li>
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
