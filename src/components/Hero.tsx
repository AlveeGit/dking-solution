/* eslint-disable @typescript-eslint/no-explicit-any */
import { heroData } from "../constants";

const Hero = ({ homeRef }: any) => {
  const { title, text, btnText, img } = heroData;
  return (
    <div ref={homeRef} className="bg-hero mt-5">
      <div className="d-flex justify-content-between align-items-center container hero-wrapper">
        <div className="hero-details">
          <p className="hero-title">{title}</p>
          <p className="hero-text">{text}</p>
          <button className="fs-12 btn-section">{btnText}</button>
        </div>
        <div className="hero-img">
          <img src={img} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
