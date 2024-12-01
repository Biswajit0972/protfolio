import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./Logo.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";
import { useNavContextHook } from "../context/Navigation.jsx";
import DesktopNav from "./DesktopNav.jsx";

const Navbar = () => {
  const { menu, setMenu } = useNavContextHook();
  return (
    <div className="w-full sticky inset-0 h-14 flex-between px-5 dark:text-white text-black bg-white-500 dark:bg-black-500 z-50">
      <Logo />
      {/* Desktop view */}
      <DesktopNav/>
      <div className="relative w-[15%] flex-between md:w-[5%] md:flex-center xl:w-[2%]">
        <DarkModeToggle />
        <button
          className="md:hidden text-2xl font-bold font-primary dark:text-white"
          onClick={() => setMenu((e) => !e)}
        >
          {menu ? <CiMenuFries /> : <CiMenuBurger />}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
