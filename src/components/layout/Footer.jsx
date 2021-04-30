import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const { t } = useTranslation();

  return (
  <footer>
    <Container>
      <Row >
        <Col>
          <ul>
            Salon des Arts - Carantec
            <ol>{t("address")}</ol>
            <ol>{t("phone")}</ol>
            <ol>{t("email")}</ol>
          </ul>
        </Col>
        <Col className="d-flex justify-content-center">
          <ul>
            <ol>
              <Link className="footerlink" to="/">{t("linkhome")}</Link>
            </ol>
            <ol>
              <Link className="footerlink" to="/apply">{t("linkapply")}</Link>
            </ol>
            <ol>
              <Link className="footerlink" to="/contacts">{t("linkcontact")}</Link>
            </ol>
          </ul>
        </Col>
        <Col>
          <ul className="list-inline">
            <p className="text-center">{t("followus")}</p>
            <ol className="list-inline-item">
              <Link to="#">
                <SocialIcon className="socialicon" url="https://twitter.com" />
              </Link>
            </ol>
            <ol className="list-inline-item">
              <Link to="#">
                <SocialIcon className="socialicon" url="https://facebook.com" />
              </Link>
            </ol>
            <ol className="list-inline-item">
              <Link to="#">
                <SocialIcon className="socialicon" url="https://instagram.com" />
              </Link>
            </ol>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-end">
      <small>Jérémy Querné © 2021</small>
    </div>
  </footer>
  );
};

export default Footer;
