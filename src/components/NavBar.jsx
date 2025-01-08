import Menu from "./Menu";
// i must use mx-auto with container to prevent the scroll effect

const NavBar = () => {
  return (
    <section>
      <div className="container flex flex-row items-center justify-between pt-7 b">
        <img
          src="src/assets/images/logo.svg"
          alt="logo"
          className="w-[100px]"
        />
        <Menu />
      </div>
    </section>
  );
};

export default NavBar;
