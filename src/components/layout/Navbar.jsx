import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../locales/i18n";
import {i18n} from "../../locales/i18n.js";

const Navbar = ({setLanguage}) => {
  const { t } = useTranslation();
 
  const handleOnclick=(e)=>{
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  
  return (
    <div className="Navbar">
      <h1>Navbar</h1>
      <nav>
        <Link to="/">{t("linkhome")}</Link>
        <Link to="/">{t("linkregister")}</Link> 
        <Link to="/">{t("linkcontact")}</Link>
        <button value='en' onClick={handleOnclick}>
          English
        </button>
        <button value='fr' onClick={handleOnclick}>
          Français
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
