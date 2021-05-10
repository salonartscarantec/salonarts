import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PdfFile } from "./PdfFile";
import { Button } from "react-bootstrap";

const PdfDownloadPainting = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;
    
  return (
    <div className='PdfDownloadPainting'>
      <PdfFile ref={componentRef} />
      <div className="text-center">
        <Button className="buttoncustom" onClick={handlePrint}>Créer votre Pdf</Button>
        <h6 className="text-center">
          Une fois votre formulaire rempli, envoyer le nous par
        </h6>
        <Button 
          className="buttoncustom" 
          href={`mailto:${REACT_APP_EMAIL}?subject=inscription`}>
            Email
        </Button>
      </div>
    </div>
  );
};
    
export default PdfDownloadPainting;