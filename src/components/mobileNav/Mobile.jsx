
import { navigationItems } from "../../utils";
const Mobile = () => {
    
  return (
    <nav className=" fixed w-36  p-2 rounded-md border-2 border-orange  top-18 right-4 dark:text-black-500 z-50 backdrop-filter backdrop-blur-sm bg-opacity-10">
      <ul className=" relative h-full w-full flex flex-col gap-1">
        {navigationItems.map((item) => (
          <li key={item.id} className="p-2 text-lg font-primary  rounded-md hover:bg-amber-200">
            <a href={item.path} className="flex-gap gap-4 ">
              {item.name}
              <span className="text-rose-400">{<item.icon/>}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Mobile;
