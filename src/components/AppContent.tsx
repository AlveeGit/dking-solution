/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import {
  Hero,
  Team,
  Support,
  Success,
  Client,
  Faq,
  Service,
} from "../components/index";

const AppContent = ({
  homeRef,
  serviceRef,
  clientsRef,
  aboutRef,
  contactRef,
}: any) => {
  return (
    <div className="app-content-wrapper">
      <div className="d-flex flex-column">
        <Hero homeRef={homeRef} />
        <Team aboutRef={aboutRef} />
        <Support serviceRef={serviceRef} />
        <Success />
        <Client clientsRef={clientsRef} />
        <Faq />
        <Service contactRef={contactRef} />
      </div>
    </div>
  );
};
export default AppContent;
