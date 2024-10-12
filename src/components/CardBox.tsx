
type getCardBoxItemTypes = {
  img: string;
  title: string;
  text: string;
  btnText?: string;
  cardPosition?: string;
};

const CardBox = ({
  img,
  title,
  text,
  btnText,
  cardPosition
}: getCardBoxItemTypes) => {
  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center card-box ${
        cardPosition === "down" ? "card-down" : ""
      }`}
    >
      <div>
        <img src={img} alt="" className="img-fluid" />
      </div>
      <span className="card-title">{title}</span>
      <p className="card-text">{text}</p>
      {btnText && <button className="fs-12 btn-card">{btnText}</button>}
    </div>
  );
};
export default CardBox;
