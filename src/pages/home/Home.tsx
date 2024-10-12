import {
  Hero,
  Team,
  Support,
  Success,
  Client,
  Faq,
  Service,
} from "../../components/index";
const Home = () => {
  return (
    <div className="d-flex flex-column">
      <Hero />
      <Team />
      <Support />
      <Success />
      <Client />
      <Faq />
      <Service />
    </div>
  );
};
export default Home;
