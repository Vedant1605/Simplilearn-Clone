import { Fragment } from 'react';
import './course.css'
import CourseCard from './CourseCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Course = (props) => {
    const courses = props.courses
        .map(course =>
            <div>
                <CourseCard
                    title={course.title}
                    time={course.time}
                    src={course.src}
                    features={course.features}
                    key={Math.random()}
                />
            </div>
        )
    return (
        <Fragment>
            <div className="cr">
                <h3>{props.heading}</h3>
                <p>{props.info}</p>
                <Carousel responsive={responsive}>
                {courses}
                </Carousel>
            </div>
        </Fragment>
        )
    }
    export default Course
    // <div className="courses">
    // </div>