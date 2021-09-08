import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="BGG" >
        <footer id="Contact" className="container">
          <div className="content" >
            <div className="left box">
              <div className="upper">
                <div className="topic">SimpliLearn</div>
                <p>Building Careers of Tomorrow</p>
                <div className="Media-logo">
                  <div className="media-icons"  >
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
              <div className="lower">
              </div>
            </div>
            <div className="middle box">
              <div className="topic">SimpliLearn</div>
              <div><a href="#">About</a></div>
              <div><a href="#">Careers</a></div>
              <div><a href="#">Placement Support</a></div>
              <div><a href="#">SimpliLearn Blog</a></div>
              <div><a href="#">Success Stories</a></div>
              <div><a href="#">For Teams</a></div>
              <div><a href="#">Data Science Programs for Teams</a></div>
              <div><a href="#">Product and Technology Programs for Teams</a></div>
              <div><a href="#">Management Programs for Teams</a></div>
              <div><a href="#">Online Power Learning</a></div>
              <div><a href="#">Xchange</a></div>
              <div><a href="#">BaseCamp</a></div>
              <div><a href="#">For Buisiness</a></div>
              <div><a href="#">Short Videos</a></div>
            </div>
            <div className="right box">
              <div className="topic">Support</div>
              <div><a href="#">Contact</a></div>
              <div><a href="#">Terms & Conditions</a></div>
              <div><a href="#">Privacy Policy</a></div>
            </div>
            <div className="right box">
              <div><button className="btn btn-outline-light">Get the android app</button></div>
              <br />
              <div><button className="btn btn-outline-light">Get the IOS app</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default Footer