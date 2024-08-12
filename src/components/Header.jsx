import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import Button from "../components/Button";

const Header = () => {
  const currPath = useLocation();
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-8/20  backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-xl:py-5">
        <a className=" block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>
        <nav className=" hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className=" flex flex-col z-2 relative items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6  py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  currPath.hash === item.url ? "lg:text-n-1 z-2" : "text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Acconut
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
