import { faqData, faqCardData } from "../constants";
import Accordion from "react-bootstrap/Accordion";
import Dot from "../assets/images/dot.jpg";
const Faq = () => {
  const { title, text } = faqData;
  return (
    <div className="bg-dark-blue">
      <div className="d-flex gap-5 faq-container md-align-items-center justify-content-between container padding-y-4">
        <div className="w-50 section-info d-flex flex-column md-align-items-center">
          <span className="section-title">{title}</span>
          <span className="section-text">{text}</span>
          <div className="w-50">
            <img className="img-fluid" src={Dot} alt="" />
          </div>
        </div>
        <div className="w-50 md-w-100">
          <Accordion defaultActiveKey="0">
            {faqCardData?.map((item) => (
              <Accordion.Item eventKey={`${item?.id}`}>
                <Accordion.Header>{item?.title}</Accordion.Header>
                <Accordion.Body>{item?.text}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default Faq;
