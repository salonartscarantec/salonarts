import Carousel from 'react-bootstrap/Carousel';
import image1 from 'assets/images/tableaux1.webp';
import image2 from 'assets/images/photo4rs.webp';
import image3 from 'assets/images/photo6.webp';
import image4 from 'assets/images/photo8.webp';
import image5 from 'assets/images/photo7.webp';
import image6 from 'assets/images/tableaux5.webp';
import image7 from 'assets/images/photo-statue.webp';
import image8 from 'assets/images/tableaux3.webp';

const CarouselDisplay = () => {
    
  return (
    <>
    <Carousel className='CarouselDisplay' >

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image1}
          alt="salon des arts, présentation des oeuvres et de l'exposition, 1"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image2}
          alt="Démonstration par un artiste, Pierre Quentel"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image3}
          alt="salon des arts, présentation des oeuvres et de l'exposition, 2"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image4}
          alt="Article de journal, Télégramme"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image8}
          alt="salon des arts, présentation des oeuvres et de l'exposition, 3"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image5}
          alt="Atelier découverte avec des jeunes"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image6}
          alt="salon des arts, présentation des oeuvres et de l'exposition, 4"
        />
      </Carousel.Item> 

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image7}
          alt="salon des arts, sculpture"
        />
      </Carousel.Item>
        
    </Carousel>
    </>
  )
}
    
export default CarouselDisplay