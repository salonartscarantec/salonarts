import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Player } from '@lottiefiles/react-lottie-player';

const Contacts = () => {
  const { t } = useTranslation();
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;
  const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;
  const REACT_APP_PHONE = process.env.REACT_APP_PHONE;
    
  return (
    <div className='Contacts m-auto text-center'>
      <h1>{t("contacttitle")}</h1>
      <Row>
        <Col xs={12} md={6}>
          <ul className="contacttext">
            <ol>{t("address")} {REACT_APP_ADDRESS}</ol>
            <ol>{t("phone")} {REACT_APP_PHONE}</ol>
            <ol>
              {t("email")} 
              <a 
                className="contactlink" 
                href={`mailto:${REACT_APP_EMAIL}?subject=contact`}>
                  {REACT_APP_EMAIL}
              </a>
            </ol>
          </ul>
        </Col>
        <Col xs={12} md={6}>
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="https://assets7.lottiefiles.com/packages/lf20_eBcQGa.json"
            alt="contact us animation"
            ></Player>
        </Col>
      </Row>
      <Row>
        <Col sx={12} md={12}>
          <p>Le Conseil d’administration se compose d’une vingtaine de membres.</p> 
        </Col>
      </Row>
     <Row>
        <Col sx={12} md={12}>
          <h5>Le bureau élu :</h5>
        </Col>
     </Row>
     <Row>
      <Col sx={12} md={6} >
        
          <p>Président d’honneur : Loyz Laouénan</p>
          <p>Président : J.H. Prigent</p>
          <p>Secrétaires : J.Gauthier et C.Conaté</p>
          <p>Communication : M.Lacut</p>
          <p>Trésorière : M.Querné</p>
          <p>Trésorière adjointe : A. Le Scour</p>
        
      </Col>
      <Col sx={12} md={6}>
      </Col>
     </Row>
    </div>
  );
};
    
export default Contacts;