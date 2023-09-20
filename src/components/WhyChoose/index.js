import './index.css'

const WhyChoose = () => (
  <div className="why-choose-section-container">
    <div className="rough-container">
      <h1 className="we-keep">Why </h1>
      <div className="keep-heading">
        <h1 className="expanding-heading">
          Choose <span className="mark"> us ?</span>
        </h1>

        <img
          src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695123787/Vector_1_1_qpgf70.png"
          alt="rough"
          className="rough"
        />
      </div>
    </div>
    <p className="choose-section">
      We want you and your heart to be healthy so you can live a <br /> happy
      life.{' '}
    </p>
    <div className="why-choose-section-card">
      <div className="choose">
        <div className="choose-card">
          <img
            className="nabl-logo"
            alt="nablLogo"
            src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695131787/Rectangle_80_o9xjh0.png"
          />
          <h1 className="heading">NABL Accredited</h1>
          <p className="choose-para">
            We accurate and safe result <br /> from our NABL-certified lab{' '}
            <br /> partners
          </p>
        </div>
        <div className="choose-card">
          <img
            className="nabl-logo"
            alt="nablLogo"
            src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1695131787/Rectangle_80_o9xjh0.png"
          />
          <h1 className="heading">NABL Accredited</h1>
          <p className="choose-para">
            We accurate and safe result <br /> from our NABL-certified lab{' '}
            <br /> partners
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default WhyChoose
