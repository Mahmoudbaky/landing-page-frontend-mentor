import { IoClose } from "react-icons/io5";

const MobileMenu = () => {
  return (
    <div className="fixed top-0  z-50 w-[200px] h-screen p-10 bg-white">
      <div className="flex justify-end">
        <IoClose />
      </div>
      <ul className="flex flex-col gap-[10px]">
        <li>Features</li>
        <li>Company</li>
        <li>Careers</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
