import Carousel from 'react-bootstrap/Carousel';
import image1 from 'assets/images/image1.webp';
// import image2 from 'assets/images/photo4rs.webp';
import image3 from 'assets/images/image2.webp';
// import image4 from 'assets/images/photo8.webp';
import image5 from 'assets/images/image3.webp';
import image6 from 'assets/images/image4.webp';
import image7 from 'assets/images/image5.webp';
import image8 from 'assets/images/image6.webp';

const CarouselDisplay = () => {
    
  return (
    <>
    <Carousel className='CarouselDisplay' >

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image1}
          alt="salon des arts, Anne Sophie Hocquez-Schipman en démonstration"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Anne Sophie Hocquez-Schipman</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image3}
          alt="salon des arts, sculpture de perroquet, Olivier Raoult, 2"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Olivier Raoult</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image8}
          alt="salon des arts, tableau, Soizic Ogier - Le Goff, 3"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Soizic Oger - Le Goff</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image5}
          alt="Atelier découverte avec des jeunes, Véronique Pedrero"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Véronique Pedrero</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image7}
          alt="salon des arts, sculpture, Éric Jonquais"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Éric Jonquais</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image6}
          alt="salon des arts, tableau, Joëlle Troussier, 4"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Joëlle Troussier</h4>
        </Carousel.Caption>
      </Carousel.Item> 

    </Carousel>
    </>
  )
}
    
export default CarouselDisplay