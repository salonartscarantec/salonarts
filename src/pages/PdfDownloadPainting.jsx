import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PdfFile } from "./PdfFile";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PdfDownloadPainting = () => {
  const { t } = useTranslation();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;
    
  return (
    <div className='PdfDownloadPainting'>
      <PdfFile ref={componentRef} />
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
    
export default PdfDownloadPainting;