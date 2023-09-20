import {BiLogoPlayStore} from 'react-icons/bi'
import './index.css'

const Header = () => (
  <div className="main-header-container">
    <div className="header-container">
      <img
        alt="company-logo"
        className="company-logo"
        src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695113790/Component_10_c7qik3.png"
      />
    </div>
    <div className="header-name">
      <p className="name">Home</p>
      <p className="name">Health Condition</p>
      <p className="name-color">Lab tests</p>
      <p className="name-last">Medicines</p>
      <button type="button" className="button">
        For Patients
      </button>
      <button type="button" className="button">
        For Hospitals
      </button>
    </div>
    <div>
      <button className="play-store-button" type="button">
        <BiLogoPlayStore className="icon" /> Play Store
      </button>
    </div>
  </div>
)

export default Header
