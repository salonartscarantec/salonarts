import ImageJumbotron from "components/layout/ImageJumbotron";
import { Container, Row, Col } from "react-bootstrap";
import { Player } from '@lottiefiles/react-lottie-player';
import CarouselDisplay from "components/layout/CarouselDisplay";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <section className="Home">
      <ImageJumbotron/>
      <Container>
        <Row>
          <Col>
            <h1>Salon des Arts - Carantec</h1>
            <ul>
              <li>
                blablablabalb
              </li>
              <li>
                blablablabalb
              </li>
              <li>
                blablablabalb
              </li>
            </ul>
          </Col>
          <Col>
            <Player
              autoplay={true}
              loop={true}
              controls={false}
              src="https://assets7.lottiefiles.com/packages/lf20_ggw4qc1o.json"
              style={{ height: '300px', width: '300px' }}
              ></Player>
          </Col>
        </Row>
        <Row>
          <h5>Affiches des éditions précédentes : </h5>
          <CarouselDisplay/>
        </Row>
        <Row>
          <p>Devenez Partenaires</p>
          <Link to="/contacts">Contatez nous</Link>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
