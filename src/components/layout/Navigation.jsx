import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../locales/i18n";
import { i18n } from "../../locales/i18n.js";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import Image from 'react-bootstrap/Image';
import logo from "../../assets/images/salonartscaranteccut.jpg";

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
          <Image className="logo" src={logo} alt="logo salon des arts Carantec"/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbartoggled" />
      <Navbar.Collapse id="navbartoggled">
        <Nav className="m-auto d-flex align-items-center">
          <NavItem> 
            <Link className="navbarlink mx-2" to="/">{t("linkhome")}</Link>
          </NavItem>   
          <NavItem > 
            <Link className="navbarlink mx-2" to="/apply">{t("linkapply")}</Link>
          </NavItem> 
          <NavItem >
            <Link className="navbarlink mx-2" to="/contacts">{t("linkcontact")}</Link>
          </NavItem>
        </Nav>
        <div id="buttonlanguage">
          {(
            language === "fr" && (
                <Button className="buttoncustom" value="en" onClick={handleOnclick}>
                  English <ReactCountryFlag countryCode="GB" svg alt="english flag"/>
                </Button>
            )) || (
            language === "en" && (
                <Button className="buttoncustom" value="fr" onClick={handleOnclick}>
                  Français <ReactCountryFlag countryCode="FR" svg alt="drapeau français"/>
                </Button>
            ))
          }
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
