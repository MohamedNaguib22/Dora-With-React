import "./DataTab.css"
const Grid = (props) => {
  return (
            <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-delay={props.delay} className={`img-Grid overflow-hidden ${props.className}`} >
              <img  className="img-fluid" src={props.img} alt={props.alt}/>
            </div>
  )
}

export default Grid