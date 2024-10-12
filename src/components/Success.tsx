import { successData } from "../constants";
import Vid from "../assets/video/production.mp4";
const Success = () => {
  const { title, text, btntext, clientCounter, clientStatus } = successData;
  return (
    <div className="bg-dark-blue w-100vw">
      <div className="d-flex align-items-center justify-content-between success-container container padding-y-4">
        <div className="d-flex flex-column align-items-start md-align-items-center">
          <span className="section-title">{title}</span>
          <span className="section-text">{text}</span>
          <button className="fs-12 btn-section"> {btntext}</button>
        </div>
        <div className="position-relative  ">
          <div className="client-count ">
            <span className="section-title count-title">{clientCounter}</span>
            <span className="section-text count-text">{clientStatus}</span>
          </div>
          <video className="success-video " controls src={Vid}></video>
        </div>
      </div>
    </div>
  );
};
export default Success;
