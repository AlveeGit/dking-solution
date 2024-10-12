type getClientCardTypes = {
  img: string;
  text: string;
  name: string;
  position: string;
};
const ClientCard = ({ img, text, name, position }: getClientCardTypes) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between text-center client-card-wrapper">
      <div className="w-25">
        <img src={img} alt="" className="img-fluid" />
      </div>
      <p className="fs-14 client-card-text">{text}</p>
      <span className="client-card-name">{name}</span>
      <span className="fs-12 client-card-position">{position}</span>
    </div>
  );
};
export default ClientCard;
