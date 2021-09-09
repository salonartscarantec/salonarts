import ImageJumbotron from "components/layout/ImageJumbotron";
import { Container, Row, Col, Image } from "react-bootstrap";
import CarouselDisplay from "components/layout/CarouselDisplay";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/salonartscaranteccut.jpg";
import { SocialIcon } from 'react-social-icons';
import affiche1 from "../assets/images/affiche1.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="Home">
      <ImageJumbotron/>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} data-aos="zoom-in-right">
            <h1 className="titlecustom text-center">
              <Image className="logo2" src={logo} alt="logo association salon des arts Carantec"/>
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
                {t("presentation4")}
                <span className="importanttextmedium"> {t("workshop")} </span> 
                {t("presentation5")}
                <span className="importanttextmedium"> {t("discovery")}</span>. 
              </p>
              <p className="presentationtext"> 
                {t("presentation6")} 
              </p>
              <p className="importanttexthome text-center">
                {t("followus")}
              </p>
              <p className="text-center">
                <SocialIcon data-aos="flip-up" className="socialicon m-2" url="https://fr-fr.facebook.com/ArtCarantec/" alt="facebook icon"/>
                <SocialIcon data-aos="flip-up" className="socialicon m-2" url="https://www.instagram.com/saloncarantec/" alt="instagram icon"/>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} data-aos="zoom-in-left">
            <Image
              src={affiche1}
              alt="Poster adverting Carantec's Salon des Arts"
              className="posterimage"
              />
          </Col>
        </Row>
        <Row className="d-flex justify-content-md-center">
          <CarouselDisplay/>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
