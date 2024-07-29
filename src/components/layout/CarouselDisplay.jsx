import Carousel from 'react-bootstrap/Carousel';
import image1 from 'assets/images/image1.webp';
import image2 from 'assets/images/image2.webp';
import image3 from 'assets/images/image3.webp';
import image4 from 'assets/images/image4.webp';
import image5 from 'assets/images/image5.webp';
import image6 from 'assets/images/image6.webp';
import image7 from 'assets/images/image7.webp';
//import image8 from 'assets/images/image6.webp';

const CarouselDisplay = () => {
    
  return (
    <>
    <Carousel className='CarouselDisplay' >

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image1}
          alt="salon des arts, été 2024"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Michel LE DUC</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image2}
          alt="salon des arts, été 2024"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Bernadette PIERDAIT</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image3}
          alt="salon des arts, été 2024"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Guy AN DREO</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image4}
          alt="salon des arts, été 2024"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Jean Bernard BLAISE</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image5}
          alt="salon des arts, été 2024"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Monique GENIN</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image6}
          alt="salon des arts, été 2024"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Anne Sophie HOCQUEZ</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image7}
          alt="salon des arts, été 2024"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Sylvie TROUVÉ</h4>
        </Carousel.Caption>
      </Carousel.Item> 

    </Carousel>
    </>
  )
}
    
export default CarouselDisplay