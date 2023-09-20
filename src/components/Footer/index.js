import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="contact-container">
      <img
        src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695195883/NIL_logo_Transparent_1_1_1_btebcb.png"
        className="logo"
        alt="logo"
      />
      <p className="root">
        {' '}
        Book doctor appointment online and get <br />
        your aligment treated in no time with our <br />
        expert medical support systems.Get rid of all <br /> your medical
        problems with our expert
      </p>
      <div className="contact-list">
        <button id="phone" className="contact-phone">
          +91 <vr className="vertical" />{' '}
        </button>
        <label className="phone-number" htmlFor="phone">
          {' '}
          <button className="button-phone" type="button">
            <img
              className="phone-logo"
              src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695196578/call_1_u5o8cs.png"
            />{' '}
          </button>
        </label>
      </div>
    </div>
    <div className="service-container">
      <h1 className="service-heading">Service</h1>
      <ul>
        <li className="list">Appointments</li>
        <li className="list">Appointments</li>
        <li className="list">Appointments</li>
        <li className="list">Appointments</li>
      </ul>
    </div>
    <div className="service-container">
      <h1 className="service-heading">Legal</h1>
      <ul>
        <li className="list">General info</li>
        <li className="list">Terms of service</li>
        <li className="list">Consultation</li>
        <li className="list">How it works</li>
      </ul>
    </div>
    <div className="service-container">
      <h1 className="service-heading">Talks to us</h1>
      <ul>
        <li className="list">support@notinline.com</li>
        <li className="list">appointment@notinline.com</li>
        <li className="list">+91 123456789</li>
        <li className="list">+91 872548454</li>
      </ul>
    </div>
    <hr className="horizontal-line" />
  </div>
)

export default Footer
