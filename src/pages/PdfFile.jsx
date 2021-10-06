import React from "react";
import { Row, Col, FormCheck } from "react-bootstrap";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const REACT_APP_DATE_EXPO = process.env.REACT_APP_DATE_EXPO;
const REACT_APP_PRICE = process.env.REACT_APP_PRICE;

export class PdfFile extends React.PureComponent {
  render() {
    return (
      <div className="PdfFile">
        <h2 id="formtitle" className="text-center">Salon des Arts - Carantec - Peinture</h2>
        <br></br>
        <p className="font-weight-bold">Formulaire d'inscription pour l'exposition du {REACT_APP_DATE_EXPO}, Tarif : {REACT_APP_PRICE} </p>
        <p>Surface réservée à chaque artiste : 1m20 sur 1m80 (horizontal ou vertical)</p>
        <br></br>
        <Form>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              Prénom :
            </FormLabel>
            <Col sm="4">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Nom :
            </FormLabel>
            <Col sm="4">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              N° de téléphone :
            </FormLabel>
            <Col sm="4">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Courriel :
            </FormLabel>
            <Col sm="4">
              <FormControl type="email"/>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              Adresse :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              Site internet :
            </FormLabel>
            <Col sm="4">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              N° de SIRET :
            </FormLabel>
            <Col sm="4">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <br></br>
          <h6>Oeuvre n°1 :</h6>
          <hr></hr>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              Titre :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Technique :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Dimension :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Prix :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <hr></hr>
          <br></br>
          <h6>Oeuvre n°2 :</h6>
          <hr></hr>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              Titre :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Technique :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Dimension :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Prix :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <hr></hr>
          <br></br>
          <h6>Oeuvre n°3 :</h6>
          <hr></hr>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              Titre :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Technique :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Dimension :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel column sm="2">
              Prix :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <hr></hr>
          <FormGroup>
            <FormCheck inline label="Assurera une permanence"/>
            <FormCheck inline label="Réalisera une démonstration"/>
            <FormCheck inline label="confirme que mes œuvres exposées sont bien assurées"/>
            <FormCheck inline label="Possibilité de faire un après-midi vente - dédicace de vos livres (prévenir à l’avance pour l’annoncer dans la presse)"/>
            <FormCheck inline label="Déclare avoir pris connaissance du règlement du salon d’Eté 2021 de Carantec auquel je souhaite participer et en accepte les clauses"/>
          </FormGroup>
          <FormLabel column sm="2">
            Signature:
          </FormLabel>
        </Form> 
      </div>
    );
  };
};