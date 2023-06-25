import "./HeaderContent.css";
const HeaderH2 = (props) => {
  return (
    <div className="HeaderH">
      <p className="HeaderH-H">{props.children}</p>
    </div>
  )
}

export default HeaderH2