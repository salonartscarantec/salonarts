import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Player } from '@lottiefiles/react-lottie-player';

const Contacts = () => {
  const { t } = useTranslation();
    
  return (
    <div className='Contacts m-auto text-center'>
      <h1>{t("contacttitle")}</h1>
      <Row>
        <Col xs={12} md={6}>
          <ul>
            <ol>{t("address")}</ol>
            <ol>{t("phone")}</ol>
            <ol>{t("email")}</ol>
          </ul>
        </Col>
        <Col xs={12} md={6}>
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src="https://assets7.lottiefiles.com/packages/lf20_eBcQGa.json"
          style={{ height: '400px', width: '400px' }}
          alt="contact us animation"
          ></Player>
        </Col>
      </Row>
    </div>
  );
};
    
export default Contacts;