import "./HeaderContent.css";
const HeaderP = (props) => {
  return (
    <div className="HeaderP">
      <p className="HeaderP-P">{props.children}</p>
    </div>
  );
};

export default HeaderP;
