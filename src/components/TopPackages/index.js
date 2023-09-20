import {BsCurrencyRupee} from 'react-icons/bs'
import './index.css'

const TopPackages = () => (
  <div className="package-container-1">
    <div className="rough-container">
      <h1 className="we-keep">We Keep </h1>
      <div className="keep-heading">
        <h1 className="expanding-heading">
          Expanding<span className="mark">!</span>
        </h1>
        <img
          src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695123787/Vector_1_1_qpgf70.png"
          alt="rough"
          className="rough"
        />
      </div>
    </div>
    <div className="para-container">
      <p className="para-heading">
        Explore our wide range of tests! We ensure that you don't miss out on
        any <p className="break-line"> chance to keep yourself healthy.</p>
      </p>
    </div>

    <div className="rating-card">
      <div className="rating">
        <h1 className="card-rating-heading">
          Basic Fully Body <br /> Check Up
        </h1>
        <div className="rating-start-container">
          <p className="para-start">
            4.3{' '}
            <img src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695187492/grade_uptnaj.png" />{' '}
          </p>
          <p className="para-review">(75 Viewers)</p>
        </div>
        <p className="para-details">Number of Tests-53</p>
        <div className="rupee-container">
          <p className="line-through-rate">
            MRP:
            <span className="original-price">
              <BsCurrencyRupee className="rupee" /> 5,999
            </span>{' '}
            <BsCurrencyRupee />
            5000/-
          </p>
          <button type="button" className="button-details">
            Book Now
          </button>
        </div>
      </div>
      <div className="rating">
        <h1 className="card-rating-heading">
          Advance Full Body <br /> Checkup
        </h1>
        <div className="rating-start-container">
          <p className="para-start">
            4.7{' '}
            <img src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695187492/grade_uptnaj.png" />{' '}
          </p>
          <p className="para-review">(100 Viewers)</p>
        </div>
        <p className="para-details">Number of Tests-70</p>
        <div className="rupee-container">
          <p className="line-through-rate">
            MRP:
            <span className="original-price">
              <BsCurrencyRupee className="rupee" />
              12,000
            </span>{' '}
            <BsCurrencyRupee />
            10,000
          </p>
          <button type="button" className="button-details">
            Book Now
          </button>
        </div>
      </div>
      <div className="rating">
        <h1 className="card-rating-heading">
          Liver Function Test <br /> (LFT)
        </h1>
        <div className="rating-start-container">
          <p className="para-start">
            4.3{' '}
            <img src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695187492/grade_uptnaj.png" />{' '}
          </p>
          <p className="para-review">(43 Viewers)</p>
        </div>
        <p className="para-details">Number of Tests-89</p>
        <div className="rupee-container">
          <p className="line-through-rate">
            MRP:
            <span className="original-price">
              <BsCurrencyRupee className="rupee" /> 13,299
            </span>{' '}
            <BsCurrencyRupee />
            11,299
          </p>
          <button type="button" className="button-details">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default TopPackages
