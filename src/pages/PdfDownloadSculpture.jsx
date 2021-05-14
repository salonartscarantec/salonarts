import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PdfFileSculpture } from './PdfFileSculpture';
import { Button } from "react-bootstrap";

const PdfDownloadSculpture = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;
    
  return (
    <div className='PdfDownloadSculpture'>
      <PdfFileSculpture ref={componentRef} />
      <div className="d-flex justify-content-md-center">
        <Button className="buttoncustom m-2" onClick={handlePrint}>Créer votre Pdf</Button>
        <Button 
          className="buttoncustom m-2" 
          href={`mailto:${REACT_APP_EMAIL}?subject=candidature`}>
            Email
        </Button>
      </div>
    </div>
  );
};
    
export default PdfDownloadSculpture;