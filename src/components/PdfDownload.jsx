import pdf from "assets/file/pdf-test.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfDownload = () => {
    
  return (
    <div className='PdfDownload'>
      <Document file={pdf}>
        <Page pageNumber={1}/>
      </Document>
    </div>
  );
};
    
export default PdfDownload;