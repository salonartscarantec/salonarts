import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../locales/i18n";
import { i18n } from "../../locales/i18n.js";
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import Image from 'react-bootstrap/Image'
import logo from "../../assets/images/salonartscaranteccut.jpg"

const Navigation = ({setLanguage, language}) => {
  const { t } = useTranslation();
 
  const handleOnclick=(e)=>{
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  
  return (
    <Navbar bg="ligth" expand="lg">
      <Navbar.Brand className="brand">
        <Link to="/">
          <Image className="logo" src={logo}/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbartoggled" />
      <Navbar.Collapse id="navbartoggled">
        <Nav inline className="m-auto d-flex align-items-center">  
          <Nav.Link> 
            <Link to="/apply">{t("linkapply")}</Link>
          </Nav.Link> 
          <Nav.Link>
            <Link to="/contacts">{t("linkcontact")}</Link>
          </Nav.Link>
        </Nav>
        {(
          language === "fr" && (
              <Button value="en" onClick={handleOnclick}>
                English
                <ReactCountryFlag countryCode="GB" svg />
              </Button>
          )) || (
           language === "en" && (
              <Button value="fr" onClick={handleOnclick}>
                Français
                <ReactCountryFlag countryCode="FR" svg />
              </Button>
           ))
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
