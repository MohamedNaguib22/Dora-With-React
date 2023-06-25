import "./Clients.css";
const Clients = (props) => {
  return (
    <div className="Clients">
      <div className={`ImgOne ${props.className}`} >
        <img src={props.imgOne} alt={props.alt} />
      </div>
      <div className="ClientsService">
        <div className="Awesome">
          <h2>{props.Awesome}</h2>
          <div>
            <img src={props.imgTwo} alt={props.altTwo} />
          </div>
        </div>
        <p className="Clientss">
            {props.Clients}
        </p>
      <div className="Cooper">
      <h2>
            {props.Cooper}
        </h2>
        <p>
            {props.Designer}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Clients;
