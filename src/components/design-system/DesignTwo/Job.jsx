import "./Job.css"

const Job = (props) => {
  return (
    <div className="Projects">
        <div className="IconProjects">
            {props.iconTwo}
        </div>
        <div>
        <h2>
            {props.titleOne}
        </h2>
        <p>
            {props.job}
        </p>
        </div>
    </div>
  )
}

export default Job