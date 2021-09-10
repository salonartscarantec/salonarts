import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PdfFileSculpture } from './PdfFileSculpture';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const PdfDownloadSculpture = () => {
  const { t } = useTranslation();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;
    
  return (
    <div className='PdfDownloadSculpture'>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="./brush_black_18dp.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Salon des arts de Carantec, 
          le formulaire de candidature pour les artistes sculpteurs."
        />
        <link rel="apple-touch-icon" href="./brush_black_18dp.svg" />
        <link rel="manifest" href="https://www.salonartcarantec.com/manifest.json" />
        <title>Salon des Arts Carantec - Candidature - Sculpture </title>
      </Helmet>
      <PdfFileSculpture ref={componentRef} />
      <div className="d-flex justify-content-md-center">
        <Button className="buttoncustom m-2" onClick={handlePrint}>Créer votre Pdf</Button>
        <Button 
          className="buttoncustom m-2" 
          href={`mailto:${REACT_APP_EMAIL}?subject=candidature`}>
            Email
        </Button>
      </div>
      <div className="d-flex justify-content-md-center mb-2">
        <small>{t("warning")}</small>
      </div>
    </div>
  );
};
    
export default PdfDownloadSculpture;