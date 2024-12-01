import { navigationItems } from "../utils";
const DesktopNav = () => {
  return (
    <nav className=" hidden md:block relative">
      <ul className="relative flex-gap">
        {navigationItems.map((item) => (
          <li
            key={item.id}
            className="py-1 px-3 text-lg font-primary  rounded-md hover:bg-amber-500"
          >
            <a href={item.path} className="flex-gap gap-4 ">
              {item.name}
              <span className="dark:text-orange text-rose-500">{<item.icon />}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
