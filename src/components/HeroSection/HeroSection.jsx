import { useState } from "react";
//image
import HeroMobile from "@/assets/img/image-hero-mobile.png";
import HeroDesktop from "@/assets/img/image-hero-desktop.png";

//image-client
import Databiz from "@/assets/img/client-databiz.svg";
import Audiophile from "@/assets/img/client-audiophile.svg";
import Meet from "@/assets/img/client-meet.svg";
import Maker from "@/assets/img/client-maker.svg";

const HeroSection = () => {
  //actualizar estado de pantalla
  const [isMobile, setIsMobile] = useState(true);

  const handlerResize = () => {
    if (window.innerWidth > 768) {
      return setIsMobile(true);
    }
    setIsMobile(false);
  };

  window.addEventListener("resize", handlerResize);

  return (
    <div>
      {isMobile ? (
        //desktop
        <section>
          <div className="w-[80vw] justify-center md:container md:mx-auto md:flex">
            <div className="h-full items-start justify-center  md:flex md:w-[90%] md:flex-col">
              <h1 className="md:mb-8 md:text-[70px] md:font-bold">
                Make <br /> remote work
              </h1>
              <p className="md:pb-14 md:text-left md:text-[18px] md:text-Medium-Gray">
                Get your team in sync, no matter your location. <br />{" "}
                Streamline processes, create team rituals, and <br /> watch
                productivity soar.
              </p>
              <button className=" bg-Almost-Black md:rounded-xl md:border-2 md:border-solid md:border-Almost-Black md:px-7 md:py-3 md:capitalize md:text-Almost-White">
                Learn more
              </button>
              <div className="md:flex  md:justify-center   ">
                <div className="md:flex md:w-full md:items-end md:gap-10 ">
                  <img src={Databiz} alt="" className="h-7 w-20" />
                  <img src={Audiophile} alt="" className="mx-4 h-7 w-14" />
                  <img src={Meet} alt="" className="mx-4 h-7 w-16" />
                  <img src={Maker} alt="" className="h-4 w-16" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={HeroDesktop} alt="hero-desktop" />
            </div>
          </div>
        </section>
      ) : (
        //mobile
        <section>
          <div className="">
            <div className="flex items-center justify-center">
              <img src={HeroMobile} alt="hero-desktop" />
            </div>
            <div className="container px-2 py-10 text-center">
              <h1 className="text-center text-[37px] font-bold">
                Make remote work
              </h1>
              <p className="py-4 text-center text-[17px] text-Medium-Gray">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
              <button className="my-4 rounded-xl border-2 border-solid border-Almost-Black bg-black py-2 px-6 capitalize text-Almost-White">
                Learn More
              </button>
            </div>
          </div>
        </section>
      )}
      <footer className="mx-auto px-4 md:hidden">
        <div className="flex items-center justify-around">
          <img src={Databiz} alt="" className="w-20 " />
          <img src={Audiophile} alt="" className="mx-4 h-7 w-14" />
          <img src={Meet} alt="" className="mx-4 w-16" />
          <img src={Maker} alt="" className="h-4 w-16" />
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;
