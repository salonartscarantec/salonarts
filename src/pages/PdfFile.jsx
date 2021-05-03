import React from "react";
import { Row, Col } from "react-bootstrap";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const REACT_APP_DATE_EXPO = process.env.REACT_APP_DATE_EXPO;
const REACT_APP_PRICE = process.env.REACT_APP_PRICE;

export class PdfFile extends React.PureComponent {
  render() {
    return (
      <div className="PdfFile">
        <h1 className="text-center">Salon des Arts - Carantec</h1>
        <br></br>
        <p>Formulaire d'inscription pour l'exposition du {REACT_APP_DATE_EXPO} :</p>
        <p> tarif : {REACT_APP_PRICE} </p>
        <br></br>
        <Form>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              prénom :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              Nom :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              Nom d'artiste :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              N° de téléphone :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="2">
              Courriel :
            </FormLabel>
            <Col sm="10">
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
              N° de SIRET :
            </FormLabel>
            <Col sm="10">
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
              Prix :
            </FormLabel>
            <Col sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <hr></hr>
        </Form> 
      </div>
    );
  };
};