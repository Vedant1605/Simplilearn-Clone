import './courseCard.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
const CourseCard = (props) => {
    const feature=props.features.map(fe=><li>{fe}</li>)
    return (
        <div class="card">
            <img src={props.src} class="card-img-top" alt={props.key} />
            <div class ="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class ="card-text"><CalendarTodayIcon /> {props.time}</p>
            <ul class ="card-text">{feature}</ul>
            </div>
        </div>
    )
}
export default CourseCard;