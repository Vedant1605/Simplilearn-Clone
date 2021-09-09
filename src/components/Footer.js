import React from 'react'
import './Footer.css'
import { Facebook, Twitter, LinkedIn, YouTube } from '@material-ui/icons';
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
                  <p><Facebook/></p>
                  <p><Twitter /></p>
                  <p><LinkedIn /></p>
                  <p><YouTube /></p>
                  </div>
                </div>
              </div>
              <div className="lower">
              </div>
            </div>
            <div className="middle box">
              <div className="topic">SimpliLearn</div>
              <div><p>About</p></div>
              <div><p>Careers</p></div>
              <div><p>Placement Support</p></div>
              <div><p>SimpliLearn Blog</p></div>
              <div><p>Success Stories</p></div>
              <div><p>For Teams</p></div>
              <div><p>Data Science Programs for Teams</p></div>
              <div><p>Product and Technology Programs for Teams</p></div>
              <div><p>Management Programs for Teams</p></div>
              <div><p>Online Power Learning</p></div>
              <div><p>Xchange</p></div>
              <div><p>BaseCamp</p></div>
              <div><p>For Buisiness</p></div>
              <div><p>Short Videos</p></div>
            </div>
            <div className="right box">
              <div className="topic">Support</div>
              <div><p>Contact</p></div>
              <div><p>Terms & Conditions</p></div>
              <div><p>Privacy Policy</p></div>
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