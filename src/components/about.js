import './about.css'
const About = () => {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="left-clm">
                        <h1>World’s #1 <br /> Online Bootcamp</h1>
                        <ul>
                            <li>
                                <b>2,000,000</b>
                                careers advanced
                            </li>
                            <li><b>1,500</b> live classNamees every month</li>
                            <li><b>85%</b> report career benefits including promotion or a new job</li>
                        </ul>
                        <a href="#post-graduate-programs" className="btn btn-primary">Explore Programs</a>
                    </div>
                    <div className="right-clm">
                        <iframe className="video" width="98%" height="300" src="https://www.youtube.com/embed/-caxhMlw_04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <video src="blob:https://www.simplilearn.com/720cf739-c0b4-4c22-be17-85629f85dcf9" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;