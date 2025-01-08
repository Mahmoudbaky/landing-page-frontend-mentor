import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import FeaturesMenu from "./FeaturesMenu";
import CompanyMenu from "./CompanyMenu";
import { HiOutlineMenu } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const [company, setCompany] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleCompany = () => {
    setCompany(!company);
  };
  return (
    <div className="flex flex-row items-center w-full justify-between gap-[30px] py-5 px-5">
      <div className="flex flex-row items-center w-full justify-between gap-[30px]">
        <ul className="hidden lg:flex flex-row gap-[15px] font-semibold opacity-[0.7] ">
          <li>
            <div
              onClick={handleMenu}
              className="flex flex-row items-center gap-[3px] hover:opacity-100 hover:cursor-pointer"
            >
              <p>Features</p>
              <div>{menu ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
              {menu && (
                <div className="absolute left-[150px] top-[80px] rounded-lg bg-white ">
                  <FeaturesMenu />
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
                <div className="absolute left-[350px] top-[80px] bg-white">
                  <CompanyMenu />
                </div>
              )}
            </div>
          </li>
          <li className="hover:opacity-100 hover:cursor-pointer">careers</li>
          <li className="hover:opacity-100 hover:cursor-pointer">About</li>
        </ul>
        <div className=" hidden lg:flex flex-row gap-[20px] opacity-[0.7]">
          <button>Login</button>
          <button className="border-black border-[0.5px] py-2 px-4 rounded-xl">
            Resgister
          </button>
        </div>
      </div>

      <nav className="mr-0 lg:hidden">
        <Sheet>
          <SheetTrigger className="text-3xl ">
            <HiOutlineMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Menu</SheetTitle>
            <ul className="flex flex-col gap-[15px] font-semibold opacity-[0.7] pt-5">
              <li>
                <div
                  onClick={handleMenu}
                  className="flex flex-row items-center gap-[3px] hover:opacity-100 hover:cursor-pointer"
                >
                  <p>Features</p>
                  <div>{menu ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                  {menu && (
                    <div className="absolute left-[150px] top-[80px] rounded-lg bg-white ">
                      <FeaturesMenu />
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
                    <div className="absolute left-[350px] top-[80px] bg-white">
                      <CompanyMenu />
                    </div>
                  )}
                </div>
              </li>
              <li className="hover:opacity-100 hover:cursor-pointer">
                careers
              </li>
              <li className="hover:opacity-100 hover:cursor-pointer">About</li>
            </ul>
            <div className=" flex flex-col pt-5 gap-[20px] opacity-[0.7]">
              <button>Login</button>
              <button className="border-black border-[0.5px] py-2 px-4 rounded-xl">
                Resgister
              </button>
            </div>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;

{
  /* <div className="text-3xl lg:hidden hover:cursor-pointer">
          
        </div> */
}
