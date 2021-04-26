import ImageJumbotron from "components/layout/ImageJumbotron";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Player } from '@lottiefiles/react-lottie-player';
import CarouselDisplay from "components/layout/CarouselDisplay";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

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
          <h5 className="m-auto">Affiches des éditions précédentes : </h5>
        <Row className="d-flex justify-content-md-center">
          <CarouselDisplay/>
        </Row>
        <Row>
          <p> {t("partnership")}
            <span>
              <Button>
                <Link className="text-light" to="/contacts">{t("contactus")}</Link>
              </Button>
            </span>
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
