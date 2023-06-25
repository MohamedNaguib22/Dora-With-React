import "./OurBlog.css";

const OurBlog = (props) => {
  return (
    <div className="Cat">
      <div className="CatImg">
        <div className="imgBlog">
          <img src={props.imgBlog} alt={props.altOne} />
        </div>
        <p className="CatP">{props.April}</p>
      </div>
      <p className="Title">{props.jobTwo}</p>
      <h4>{props.blog}</h4>
    </div>
  );
};

export default OurBlog;
