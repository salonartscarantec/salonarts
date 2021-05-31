import Carousel from 'react-bootstrap/Carousel';
import image1 from 'assets/images/image1.jpg';
import image2 from 'assets/images/image2.jpg';
import image3 from 'assets/images/image3.jpg';
import image4 from 'assets/images/image4.jpg';
import image5 from 'assets/images/image5.jpg';

const CarouselDsiplay = () => {
    
  return (
    <>
    <Carousel className='CarouselDsiplay'>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block w-100"
          src={image4}
          alt="4th slide"
        />
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block w-100"
          src={image5}
          alt="4th slide"
        />
      </Carousel.Item>
        
    </Carousel>
    </>
  )
}
    
export default CarouselDsiplay