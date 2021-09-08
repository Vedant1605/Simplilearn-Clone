import { Fragment } from 'react';
import './course.css'
import CourseCard from './CourseCard';
const Course = (props) => {
    const courses = props.courses
    .map(course => 
        <CourseCard 
        title={course.title}
        time={course.time}
        src={course.src}
        features={course.features}
        key={Math.random()}
        />
        )
    return (
        <Fragment>
            <div className="cr">
                <h3>{props.heading}</h3>
                <p>{props.info}</p>
                <div className="courses">
                    {courses}
                </div>
            </div>
        </Fragment>
    )
}
export default Course