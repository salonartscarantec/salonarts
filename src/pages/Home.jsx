import ImageJumbotron from "components/layout/ImageJumbotron";
import { Container, Row, Col } from "react-bootstrap";
import { Player } from '@lottiefiles/react-lottie-player';
import CarouselDisplay from "components/layout/CarouselDisplay";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/salonartscaranteccut.jpg";
import Image from 'react-bootstrap/Image';
import { SocialIcon } from 'react-social-icons';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="Home">
      <ImageJumbotron/>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} data-aos="zoom-in-right">
            <h1 className="titlecustom text-center">
              <Image className="logo2" src={logo}/>
              Salon des Arts Carantec
            </h1>
            <div className="presentation">
              <p className="presentationtext">{t("presentation1")}</p>
              <p className="presentationtext">{t("presentation2")}</p>
              <p className="presentationtext">{t("presentation3")}</p>
              <p className="text-center">
                <span>
                  <Link className="btn buttoncustom bigbutton" to="/contacts">{t("contactus")}</Link>
                </span>
              </p>
            </div>
            <div>
              <p className="presentationtext">
                Pendant les expositions, les artistes peuvent proposer des 
                <span className="importanttextmedium"> ateliers </span> et
                nos bénévoles passionnés font des 
                <span className="importanttextmedium"> parcours de découverte</span>. 
              </p>
              <p className="presentationtext"> 
                Si vous voulez plus d'informations, 
                voir les affiches et les photos des expositions passées, 
              </p>
              <p className="importanttexthome text-center">
                Suivez nous
              </p>
              <p className="text-center">
                <SocialIcon data-aos="flip-up" className="socialicon m-2" url="https://fr-fr.facebook.com/ArtCarantec/" alt="facebook icon"/>
                <SocialIcon data-aos="flip-up" className="socialicon m-2" url="https://instagram.com" alt="instagram icon"/>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} data-aos="zoom-in-left">
            <Player
              id="artistanimation"
              autoplay={true}
              loop={true}
              controls={false}
              src="https://assets7.lottiefiles.com/packages/lf20_ggw4qc1o.json"
              alt="artist animation"
              ></Player>
          </Col>
        </Row>
          <h5 className="m-auto"></h5>
        <Row data-aos="zoom-in" className="d-flex justify-content-md-center">
          <CarouselDisplay/>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
