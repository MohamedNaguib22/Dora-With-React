import './Cardicons.css'
const CardIcon = (props) => {
  return (
    <>
    <div className='CardOne'>
        <div className={`AllIcons ${props.className}`}>
            {props.icon}
        </div>
        <h2>
            {props.title}
        </h2>
        <p>
            {props.description}
        </p>
    </div>

</>
  )
}

export default CardIcon