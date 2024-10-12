/* eslint-disable @typescript-eslint/no-explicit-any */
import { teamData, teamCardData } from "../constants/index";
import { CardBox } from "../components/index";
const Team = ({ aboutRef }: any) => {
  const { title, text, btntext } = teamData;
  return (
    <div ref={aboutRef} className="bg-dark-blue w-100vw">
      <div className="d-flex flex-column container padding-y-4">
        <div className="d-flex justify-content-between align-items-center team-header">
          <div className="team-info">
            <span className="section-title">{title}</span>
            <span className="section-text"> {text}</span>
          </div>
          <button className="fs-12 btn-section"> {btntext}</button>
        </div>
        <div className="d-flex justify-content-between  align-items-center team-card-container">
          {teamCardData?.map((item) => (
            <CardBox {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
