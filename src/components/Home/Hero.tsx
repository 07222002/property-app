import React from "react";
import HeaderNav from "./Header";
import Grid from "./Grid";
import ChatBubble from "../../images/chat bubble.png";
import ImagesGrid from "./ImagesGrid";
import TextCard from "./textCard";
import ColorCard from "./ColorCard";
import Blog from "./blog";
import Footer from "./footer";
import Reviews from "./reviews";
import Card from "./card";
import Logo from "./logo";
import FooterLinks from "./footerLinks";
import Copyright from "./copyright";

interface HeroProps {
  title: string;
  buttonText: string;
}
function Hero({ title, buttonText }: HeroProps) {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="default position-relative">
        <div className="d-none d-lg-flex">
               <div className="d-flex flex-column position-absolute left-0 bottom-0">
                  <img src={ChatBubble} alt="" loading="lazy"/>
                </div>
                <div className="position-absolute px-1 py-1 bg-black rounded-1 chat-width d-flex bottom-0">
                    <p className="text-center text-light fs-6 fw-semibold font-family-Poppins col-11 m-0 px-3 py-2">How can I help you?</p>
                </div>
                </div>
        <HeaderNav />
        <div className="d-flex justify-content-center align-items-center m-auto position-absolute mb-5 bottom-0 start-0 end-0">
          <div className="col-xl-6 row justify-content-center align-items-center d-flex">
            <div className="col-12 row justify-content-center align-items-center d-flex">
              <p className="text-head text-center text-white font-family-Poppins fs-1 font-family-Poppins col-12 m-0 px-3 py-2">
                {title}
              </p>
            </div>
            <div className="row w-auto justify-content-center align-items-center">
              <div className="">
                <div className="button-get px-2 rounded-5 btn btn-outline-dark border border-1 border-light justify-content-center align-items-center d-flex">
                  <div className="justify-content-center px-2 align-items-center">
                    <p className="button-start text-light fs-5 font-family-Poppins d-flex align-items-center text-center">
                      {buttonText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
     
          </div>
        </div>
      </div>
      <Grid />
      <ImagesGrid/>
      <TextCard/>
      <ColorCard/>
      <Blog/>
      <Footer/>
      <Reviews/>
      <Card/>
      <Logo/>
      <FooterLinks/>
      <Copyright/>
    </div>
  );
}

export default Hero;