import Carousel from 'react-bootstrap/Carousel';
import image1 from 'assets/images/image1.webp';
import image2 from 'assets/images/image2.webp';
import image3 from 'assets/images/image3.webp';
import image4 from 'assets/images/image4.webp';
import image5 from 'assets/images/image5.webp';
import image6 from 'assets/images/image6.webp';
import image7 from 'assets/images/image7.webp';
import image8 from 'assets/images/image8.webp';
import image9 from 'assets/images/image9.webp';

const CarouselDisplay = () => {
    
  return (
    <>
    <Carousel className='CarouselDisplay' >

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image1}
          alt="salon des arts, été 2025"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Hélène Matlis</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image2}
          alt="salon des arts, été 2025"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Max Loriquet</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image3}
          alt="salon des arts, été 2025"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Yves Jehanno</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image4}
          alt="salon des arts, été 2025"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Soisik Oger Le Goff</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image5}
          alt="salon des arts, été 2025"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Evelyne Brunet</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image6}
          alt="salon des arts, été 2025"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Tatie Hamon</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image7}
          alt="salon des arts, été 2025"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Chantal Tymen</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image8}
          alt="salon des arts, été 2025"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Françoise Amet</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image9}
          alt="salon des arts, été 2025"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Martine Mathieu</h4>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </>
  )
}
    
export default CarouselDisplay