import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col, Button } from "react-bootstrap";

const Apply = () => {
  const { t } = useTranslation();
  const REACT_APP_PRICE = process.env.REACT_APP_PRICE;
    
  return (
    <section className='Apply m-auto text-center'>
      <h1>{t("registertitle")}</h1>
      <Row className="m-auto d-flex">
        <Col>
          <Button>
            <Link className="text-light" to="/pdfdownload">{t("linkregisterdownload")}</Link>
          </Button>
        </Col>
      </Row>
      <Row className="d-block">
        <ul>
          <h2>
            {t("registerrules")}
          </h2>
          <li>
            {t("registerprice")} {REACT_APP_PRICE}
          </li>
          <li>
            blaugaiaoyvaoyvoyv aiuevpaevf
          </li>
          <li>
            blaugaiaoyvaoyvoyv aiuevpaevf
          </li>
          <li>
            blaugaiaoyvaoyvoyv aiuevpaevf
          </li>
        </ul>
      </Row>
    </section>
  );
};
    
export default Apply;