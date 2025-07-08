import { Link } from "react-scroll";
import { sidebarLinks, ICON_CLASSES } from "../../data/sidebar";

const LINK_PROPS = {
  spy: true,
  smooth: true,
  duration: 10,
  className: "sm:py-2 group",
  activeClass: "active",
};

const SidebarMenu = () => {
  return (
    <div
      className="
        fixed right-7 bottom-6 
        flex flex-row items-center justify-center 
        p-6 gap-0 border rounded-xl z-30 
        w-[85%] h-[5%] 
        lg:p-4 lg:right-0 lg:m-6 lg:w-[4%] lg:h-[50%] 
        lg:flex-col lg:gap-8 lg:items-center lg:justify-center lg:bottom-1/4 
        sm:right-7 sm:bottom-24 sm:flex-col sm:justify-between sm:gap-3 sm:h-96 sm:w-14 sm:pt-4 sm:pb-4 
        md:justify-end md:flex-row md:bottom-4 md:w-[40%] md:h-12 md:gap-4 
        bg-zinc-700
      "
    >
      {sidebarLinks.map(({ to, icon: Icon, offset, tooltip }) => (
        <div
          key={to}
          className="tooltip lg:tooltip-left tooltip-top"
          data-tip={tooltip}
        >
          <Link to={to} {...LINK_PROPS} offset={offset}>
            <Icon className={ICON_CLASSES} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
