import './index.css'

const Expanding = () => (
  <div className="expanding-container">
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
    <div className="lab-collection">
      <div type="button" className="card-lab">
        <p className="para">5+ </p>
        <p className="para-1"> Labs </p>
      </div>
      <div type="button" className="card-lab">
        <p className="para">100+ </p>
        <p className="para-1"> Collection Center </p>
      </div>
      <div type="button" className="card-lab">
        <p className="para">100+ </p>
        <p className="para-1"> Collection Center </p>
      </div>
      <div type="button" className="card-lab">
        <p className="para">1000+ </p>
        <p className="para-1"> Monthly tests </p>
      </div>
      <div type="button" className="card-lab">
        <p className="para">2200+ </p>
        <p className="para-1"> Test Menu </p>
      </div>
      <div type="button" className="card-lab">
        <p className="para">5+ </p>
        <p className="para-1"> Cities present in </p>
      </div>
    </div>
  </div>
)

export default Expanding
