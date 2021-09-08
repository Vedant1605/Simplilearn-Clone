import './awardCard.css'
const awardCard=(props)=>(
    <div className="awaCard">
        <img  src={props.src} alt={props.title}/>
        <h4>{props.title}</h4>
        <p>{props.for}</p>
    </div>
)
export default awardCard;