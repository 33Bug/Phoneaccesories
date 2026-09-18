import image1 from '../images/Image1.jpeg'
import image2 from '../images/grips.jpeg'
import image3 from '../images/stand.jpeg'

const Courosel = () => {
  return (
    <div id="carouselExample" className="carousel slide row justify-content-center" data-bs-ride="carousel">
      
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100 courosel" height="400px" alt="slide 1" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100 courosel" height="400px"  alt="slide 2" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100 courosel" height="400px"  alt="slide 3" />
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-warning"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-warning"></span>
      </button>

    </div>
  )
}

export default Courosel;