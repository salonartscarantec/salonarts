import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PdfFile } from "./PdfFile";
import { Button } from "react-bootstrap";

const PdfDownload = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    
  return (
    <div className='PdfDownload'>
      <h6 className="text-center">
        Une fois votre formulaire rempli, envoyer le nous par mail  <span>
          <Button href="mailto:Jojo@jojo.com?subject=inscription">  Email  </Button>
        </span>
      </h6>
      <PdfFile ref={componentRef} />
      <div className="text-center">
        <Button onClick={handlePrint}>Créer votre Pdf</Button>
      </div>
    </div>
  );
};
    
export default PdfDownload;