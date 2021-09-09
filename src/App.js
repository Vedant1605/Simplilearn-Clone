import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import About from './components/about';
import Companies from './components/companies';
import Course from './components/Course';
import Awards from './components/awards';
import Footer from './components/Footer';

function App() {
  const PG_COURSE = [
    {
      title: "Post Graduate Program in Cloud Computing",
      time: "12 Months",
      src: "https://www.simplilearn.com/ice9/banners/2020-05-21.jpg",
      features: ['Caltech CTME Post Graduate Certificate', 'Enrolment in Simplilearn’s JobAssist', 'Receive upto 30 CEUs from Caltech CTME', 'Get noticed by the top hiring companies', 'Receive upto 30 CEUs from Caltech CTME', 'Get noticed by the top hiring companies']
    },
    {
      title: "Post Graduate Program in Data Science",
      time: "10Months",
      src: "https://www.simplilearn.com/ice9/assets/pdp-slider_1.jpg",
      features: ['Purdue Post Graduation Program certification ', 'Exclusive Ask me Anything sessions by IBM', 'Capstone from 3 domains ', 'Receive upto 30 CEUs from Caltech CTME', 'Get noticed by the top hiring companies']
    },
    {
      title: "Professional Certificate Program in Blockchain",
      time: "9 Months",
      src: "https://www.simplilearn.com/ice9/banners/Home-page-Thumbnail-image-blockchain.jpg",
      features: ['Purdue Post Graduation Program certification and Alumni Association membership', 'Exclusive hackathons and Ask me Anything sessions by IBM', 'Capstone from 3 domains and 25+ Projects with Industry datasets from Amazon, UBER, Comcast etc.']
    },
    {
      title: "Professional Certificate Program in Blockchain",
      time: "9 Months",
      src: "https://www.simplilearn.com/ice9/banners/Home-page-Thumbnail-image-blockchain.jpg",
      features: ['Purdue Post Graduation Program certification and Alumni Association membership', 'Exclusive hackathons and Ask me Anything sessions by IBM', 'Capstone from 3 domains and 25+ Projects with Industry datasets from Amazon, UBER, Comcast etc.']
    },
    {
      title: "Professional Certificate Program in Blockchain",
      time: "9 Months",
      src: "https://www.simplilearn.com/ice9/banners/Home-page-Thumbnail-image-blockchain.jpg",
      features: ['Purdue Post Graduation Program certification and Alumni Association membership', 'Exclusive hackathons and Ask me Anything sessions by IBM', 'Capstone from 3 domains and 25+ Projects with Industry datasets from Amazon, UBER, Comcast etc.']
    },
    {
      title: "Professional Certificate Program in Blockchain",
      time: "9 Months",
      src: "https://www.simplilearn.com/ice9/banners/Home-page-Thumbnail-image-blockchain.jpg",
      features: ['Purdue Post Graduation Program certification and Alumni Association membership', 'Exclusive hackathons and Ask me Anything sessions by IBM', 'Capstone from 3 domains and 25+ Projects with Industry datasets from Amazon, UBER, Comcast etc.']
    }
  ]
  const M_COURSE = [
    {
      title: "Project Management Specialist",
      time: "12 Months",
      src: "https://www.simplilearn.com/ice9/banners/_ThumbnaiImage.jpg",
      features: ['Caltech CTME Post Graduate Certificate', 'Enrolment in Simplilearn’s JobAssist', 'Receive upto 30 CEUs from Caltech CTME', 'Get noticed by the top hiring companies', 'Receive upto 30 CEUs from Caltech CTME', 'Get noticed by the top hiring companies']
    },
    {
      title: "Cyber Security Specialist",
      time: "10 Months",
      src: "https://www.simplilearn.com/ice9/banners/IIITB_Thumbnail_image.jpg",
      features: ['Caltech CTME Post Graduate Certificate', 'Enrolment in Simplilearn’s JobAssist', 'Receive upto 30 CEUs from Caltech CTME', 'Get noticed by the top hiring companies', 'Receive upto 30 CEUs from Caltech CTME', 'Get noticed by the top hiring companies']
    },
    {
      title: "Digital Marketing Specialist",
      time: "5 Months",
      src: "https://www.simplilearn.com/ice9/banners/Arizona_Thumbnail-banner-iamge.jpg",
      features: ['Purdue Post Graduation Program certification and Alumni Association membership', 'Exclusive hackathons and Ask me Anything sessions by IBM', 'Capstone from 3 domains and 25+ Projects with Industry datasets from Amazon, UBER, Comcast etc.']
    },
    {
      title: "Digital Marketing Specialist",
      time: "5 Months",
      src: "https://www.simplilearn.com/ice9/banners/Arizona_Thumbnail-banner-iamge.jpg",
      features: ['Purdue Post Graduation Program certification and Alumni Association membership', 'Exclusive hackathons and Ask me Anything sessions by IBM', 'Capstone from 3 domains and 25+ Projects with Industry datasets from Amazon, UBER, Comcast etc.']
    },
    {
      title: "Digital Marketing Specialist",
      time: "5 Months",
      src: "https://www.simplilearn.com/ice9/banners/Arizona_Thumbnail-banner-iamge.jpg",
      features: ['Purdue Post Graduation Program certification and Alumni Association membership', 'Exclusive hackathons and Ask me Anything sessions by IBM', 'Capstone from 3 domains and 25+ Projects with Industry datasets from Amazon, UBER, Comcast etc.']
    }
  ]
  return (
    <Fragment >
      <header>
        <Navbar />
      </header>
      <About />
      <Companies />
      <h2 className="course-head">Get Certified, Get Ahead with Our Programs</h2>
      <Course
        heading="Post Graduate Programs"
        info="Learn from global experts and get certified by the world's leading universities"
        courses={PG_COURSE}
      />
      <Course heading="Master's Programs" info="Achieve your career goals with industry-recognized learning path"
        courses={M_COURSE}
      />
      <Awards />
      <Footer />
    </Fragment>
  );
}

export default App;
