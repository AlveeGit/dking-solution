/* eslint-disable @typescript-eslint/no-explicit-any */
import { supportData, supportCardData } from "../constants/index";
import { CardBox } from "../components/index";
const Support = ({ serviceRef }: any) => {
  const { title, text, btntext } = supportData;
  return (
    <div ref={serviceRef} className="bg-light-blue w-100vw bg-dark-blue">
      <div className="support-container container padding-y-4">
        <div className="support-header d-flex flex-column align-items-start">
          <div className="d-flex flex-column align-items-start w-100 md-align-items-center">
            <span className="section-title">{title}</span>
            <span className="section-text">{text}</span>
          </div>
          <button className="fs-12 btn-section"> {btntext}</button>
        </div>

        <div className="d-flex justify-content-between align-items-center flex-wrap support-card-container">
          {supportCardData?.map((item) => (
            <CardBox {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Support;
