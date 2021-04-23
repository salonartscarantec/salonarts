import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const { t } = useTranslation();

  return <footer>
    <div className="social">
      <Link to="#">
        <SocialIcon url="https://twitter.com" />
      </Link>
      <Link to="#">
        <SocialIcon url="https://facebook.com" />
      </Link>
      <Link to="#">
        <SocialIcon url="https://instagram.com" />
      </Link>
    </div>
    <div className="footercontent">
      
        <p>Salon des Arts - Carantec</p>
     
      
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/">{t("linkhome")}</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/register">{t("linkregister")}</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/contacts">{t("linkcontact")}</Link>
          </li>
        </ul>
      
      
        <p><small>Jérémy Querné © 2021</small></p>
      
    </div>
  </footer>;
};

export default Footer;
