/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import { AppContent, AppFooter, AppHeader } from "../components/index";

const DefaultLayout = () => {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const serviceRef = useRef<null | HTMLDivElement>(null);
  const clientsRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const handleClickHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickClients = () => {
    clientsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickAboutUs = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="layout-wrapper w-100vw d-flex flex-column">
        <AppHeader
          viewToAboutUs={handleClickAboutUs}
          viewToContact={handleClickContact}
          viewToHome={handleClickHome}
          viewToClients={handleClickClients}
          viewToService={handleClickService}
        />
        <AppContent
          homeRef={homeRef}
          serviceRef={serviceRef}
          clientsRef={clientsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
        <AppFooter />
      </div>
    </div>
  );
};
export default DefaultLayout;
