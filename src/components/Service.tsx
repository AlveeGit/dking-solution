/* eslint-disable @typescript-eslint/no-explicit-any */
import { serviceData } from "../constants";

const Service = ({ contactRef }: any) => {
  const { title, text, btntext } = serviceData;
  return (
    <div ref={contactRef} className="bg-dark-blue  ">
      <div className="container d-flex justify-content-center">
        <div className=" d-flex flex-column align-items-center text-center service-bg z-0 rounded-pill  padding-3 w-75 md-w-100 m-1 mb-5 ">
          <span className="section-title pb-2 z-1">{title}</span>
          <p className=" w-75 z-1 fs-14">{text}</p>
          <button className="fs-12  rounded-pill discover-btn started-btn z-1">
            {btntext}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Service;
