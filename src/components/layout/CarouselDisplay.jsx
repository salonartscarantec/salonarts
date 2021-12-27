import Carousel from 'react-bootstrap/Carousel';
import image1 from 'assets/images/image1.webp';
import image2 from 'assets/images/image2.webp';
import image3 from 'assets/images/image3.webp';
import image4 from 'assets/images/image4.webp';
import image5 from 'assets/images/image5.webp';

const CarouselDisplay = () => {
    
  return (
    <>
    <Carousel className='CarouselDisplay'>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image1}
          alt="salon des arts, présentation des oeuvres et de l'exposition"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image2}
          alt="peinture du viaduc de Morlaix, Arditti"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image3}
          alt="découverte de l'exposition par des scolaires"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image4}
          alt="Sculpture de femme, Rita"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image5}
          alt="Atelier découverte avec des jeunes"
        />
      </Carousel.Item>
        
    </Carousel>
    </>
  )
}
    
export default CarouselDisplay