import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMailBulk, faPrint } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "components/layout/Sidebar";
import { faEuroSign, 
        faHandsHelping, 
        faInfoCircle, 
        faMoneyCheckAlt, 
        faPalette, 
        faPeopleCarry, 
        faStar } from '@fortawesome/free-solid-svg-icons';

const Apply = ( ) => {
  const { t } = useTranslation();
  const REACT_APP_PRICE = process.env.REACT_APP_PRICE;
  const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;

  return (
    <section className='Apply'>
      <h1 className="titlecustom text-center">{t("registertitle")}</h1>
      <Row className="inlinelist" data-aos="zoom-in-right">
        <Col xs={12} md={12}>
          <ol className="horizontal-list">
            <li className="horizontal-list-item">
              <p>
                <FontAwesomeIcon icon={faMailBulk} size="3x" className="listicon"/> 
              </p>
              <p className="ml-2 stepstext"> 
                <li>
                  {t("step2b")}
                  <a 
                    className="emaillink" 
                    href={`mailto:${REACT_APP_EMAIL}?subject=candidature`}>
                      Email
                  </a>
                </li>
                <li>
                  <small>
                    {t("step2c")}
                  </small>
                </li> 
              </p>
            </li>
            <li className="horizontal-list-item">
              <p>
                <FontAwesomeIcon icon={faClock} size="3x" className="listicon"/> 
              </p>
              <p className="ml-2 stepstext">
                <ul className="liststeps">
                  <li>
                    {t("step3")}
                  </li>
                </ul>
              </p>
            </li>
            <li className="horizontal-list-item">
              <p>
                <FontAwesomeIcon icon={faPrint} size="3x" className="listicon"/> 
              </p>
              <p>
                <li className="ml-2 stepstext">
                  {t("step2a")} {REACT_APP_PRICE}
                </li>
              </p>
            </li>
          </ol>
        </Col>
      </Row>
      <Row className="inlinebutton" data-aos="zoom-in-right">
        <Col xs={12} md={6} className="text-center">
          <Link className="btn buttoncustom" to="/pdfdownloadpainting">
            {t("linkregisterdownload")}
            {t("painting")}
          </Link>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Link className="btn buttoncustom" to="/pdfdownloadsculpture">
            {t("linkregisterdownload")}
            {t("sculpture")}
          </Link>
        </Col>
      </Row>
      <Row className="organisation">
        <Col xs={12} md={12}>
          <h2 className="titlecustom text-center">
            {t("organisation")}
          </h2>
        </Col>
      </Row>
      <Row className="Applytext">
        <Col md={2} className="sidebar-wrapper" data-aos="zoom-in-right">
          <Sidebar/>
        </Col>
        <Col sx={12} s={12} md={10} className="righttext" data-aos="zoom-in-left">
          <ul id="info">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faStar} className="listicon2"/>
              {t("info")}
            </h2>
            <li>
              {t("openning")}
              <span className="importanttext">{t("openningdate")}</span>
            </li>
            <li>{t("openninghours")}</li>
            <li>
              {t("closure")}
              <span className="importanttext">{t("closuredate")}</span>
            </li>
            <li>{t("privateview")}</li>
          </ul>
          <ul id="artwork">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPalette} className="listicon2"/>
              {t("artworkdeposit")}
            </h2>
            <li>
              <span className="font-weight-bold">
                {t("paintors")}
              </span>
                {t("depositdatepaintors")}
            </li>
            <li>
              <span className="font-weight-bold">
                {t("sculptors")}
              </span>
                {t("depositdatesculptors")}
            </li>
            <li>
              {t("deposittext")}
            </li>
          </ul>
          <ul>
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPalette} className="listicon2"/>
              {t("artworkretrival")}  
            </h2>
            <li>
              {t("retrivaldate")} 
            </li>
          </ul>
          <ul>
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPalette} className="listicon2"/>
              {t("artworkinfos")}
            </h2>
            <li className="mb-2">
              {t("infostext")}
            </li>
            <li className="mb-2">
              <span className="font-weight-bold">
                {t("paintors")}
              </span>
              {t("infospaintors")}
            </li>
            <li className="mb-2">
              <span className="font-weight-bold">
                {t("sculptors")}
              </span>
              {t("infossculptors")}
            </li> 
          </ul>
          <ul id="applications">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faMoneyCheckAlt} className="listicon2"/>
              {t("applications")}
            </h2>
            <li>
              {t("applicationlign1")}
              {REACT_APP_PRICE}
              {t("applicationlign2")}
            </li>
            <li>
              {t("applicationaddress")}
              <span className="importanttext">{REACT_APP_ADDRESS}</span>
            </li>
            <li className="importanttext">
              {t("applicationrule1")}
            </li>
            <li className="importanttext">
              {t("applicationrule2")}
            </li>
          </ul>
          <ul id="sales">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faEuroSign} className="listicon2"/>
              {t("sales")}
            </h2>
            <li>
              {t("salestext")}
            </li>
          </ul>
          <ul id="insurances">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPeopleCarry} className="listicon2"/>
              {t("insurances")}
            </h2>
            <li>
              {t("insurancestext")}
            </li>
          </ul>
          <ul id="permanency">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faInfoCircle} className="listicon2"/>
              {t("permanency")}
            </h2>
            <li>
              {t("permanancytext")}
            </li>
          </ul>
          <ul id="others">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faHandsHelping} className="listicon2"/>
              {t("others")}
            </h2>
            <li>
              {t("otherstext")}
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};
    
export default Apply;