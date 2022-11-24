//icon
import LogoICon from "@/components/Icons/LogoICon";
import MenuIcon from "@/components/Icons/MenuIcon";
import ArrowDownIcon from "@/components/Icons/ArrowDownIcon";

const NavHeader = () => {
  return (
    <div className=" mx-auto flex items-stretch justify-between p-8 md:mb-4 md:p-8  ">
      <nav className="flex items-center gap-12">
        <div>
          <LogoICon />
        </div>
        <ul className="hidden items-stretch text-[18px] md:flex md:gap-8">
          <div className="capitalize md:flex md:items-center md:gap-4">
            <li className="md:flex md:items-center md:gap-2 ">
              Features
              <ArrowDownIcon />
            </li>
            <li className="md:flex md:items-center md:gap-2">
              Company
              <div>
                <ArrowDownIcon />
              </div>
            </li>
            <li>Careers</li>
            <li>About</li>
          </div>
        </ul>
      </nav>
      <div className="md:hidden">
        <MenuIcon />
      </div>
      <div className="hidden gap-8 text-[18px]  md:flex">
        <button className="capitalize">login</button>
        <button className="rounded-md border-2 border-solid border-Almost-Black py-2 px-6 capitalize md:rounded-xl">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavHeader;
