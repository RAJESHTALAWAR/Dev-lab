import {BsCurrencyRupee} from 'react-icons/bs'
import './index.css'

const DetailsSection = () => (
  <div className="background-image-container">
    <div className="details-section-container">
      <div className="details-container">
        <div className="card">
          <p className="details"> Fill in the details to get a call!</p>
          <div className="input-container">
            <label htmlFor="fullName">
              <img
                src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695119484/person_wp5zig.png"
                alt="contact"
                className="contact-logo"
              />
            </label>
            <input
              className="input-name"
              id="fullName"
              placeholder="Full Name"
              type="text"
            />
          </div>
          <div className="input-container">
            <label htmlFor="fullName">
              <img
                src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695119528/call_vxkdit.png"
                alt="contact"
                className="contact-logo"
              />
            </label>
            <input
              type="text"
              className="input-name"
              id="fullName"
              placeholder="Phone Number"
            />
          </div>
          <div className="input-container">
            <label htmlFor="fullName">
              <img
                src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695120522/distance_fsa88s.png"
                alt="contact"
                className="contact-logo"
              />
            </label>
            <input
              className="input-name"
              id="fullName"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="check-box-container">
            <input type="checkBox" id="checkBox" className="check-box-logo" />
            <label htmlFor="checkBox" className="condition">
              By continuing.your agree to our T&C and privacy policy{' '}
            </label>
          </div>
          <button type="button" className="button-details">
            Proceed
          </button>
        </div>
        <span className="offer-button" type="button">
          Get a Full Body Check Up <span>Now</span> at{' '}
          <span className="original-price">
            <BsCurrencyRupee className="rupee" /> 5,999
          </span>
          <BsCurrencyRupee /> 999 <span className="discount">70% OFF</span>
        </span>
      </div>
      <div className="bg">
        <div className="test-container">
          <div className="text">
            <h1 className="lab-text"> Best in Class </h1>
            <img
              alt="rough"
              className="rough"
              src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695123787/Vector_1_1_qpgf70.png"
            />
          </div>
          <h1 className="lab-text-1">lab test</h1>
        </div>
        <div className="photo-container">
          <div className="research-card">
            <div>
              <img
                src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695130342/Ellipse_1_g5j7jy.png"
                alt="cardName"
                className="card-name"
              />
            </div>
            <div>
              <p className="result-name">Timely Sample Collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DetailsSection
