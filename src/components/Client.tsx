/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import { ClientCard } from "./index";
import { clientData, clientCardData } from "../constants/index";
// import left from "../assets/images/icons/previous.png";
// import right from "../assets/images/icons/next.png";

const Client = ({ clientsRef } : any) => {
  const { title, text, btntext } = clientData;
  const settings = {
    // fade: true,
    // autoplay: true,
    // spped: 2000,
    // autoplaySpeed: 2000,
    // pauseOnHover: true
    // cssEase: "linear",
    // swipeToSlide: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div ref={clientsRef} className="bg-light-blue w-100vw bg-dark-blue">
      <div className="client-container d-flex  justify-content-between align-items-center container padding-y-4">
        <div className="section-info d-flex flex-column align-items-start md-align-items-center w-50 ">
          <span className="section-title"> {title}</span>
          <span className="section-text">{text}</span>
          <button className="fs-12 btn-section">{btntext}</button>
        </div>
        <div className="w-50  client-card-container">
          <Slider {...settings}>
            {clientCardData?.map((data) => (
              <div key={data?.id}>
                <ClientCard {...data} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Client;
