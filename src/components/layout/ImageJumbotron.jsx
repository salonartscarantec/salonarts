import { Button } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

const ImageJumbotron = () => {  

  return (
    <Jumbotron className="JumbotronDisplay">
      <h2>Prochaine exposition :</h2>
      <p>date : 14/07/21</p>
      <p>salle des fêtes</p>
      <Button>Inscrivez Vous!</Button>
    </Jumbotron>
  );
};
    
export default ImageJumbotron;