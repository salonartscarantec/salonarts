import { useTranslation } from "react-i18next";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Registerform = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [email, setEmail] = useState();

  const handleForm = async(e) => {
    const data = {
      pdf: {
        email: email,
      },
    };
    e.preventDefault();

    if(await console.log(data)){
      history.push("/register")
    }
  };

  return (
    <section className='Registerform'>
      <h1>{t("linkregisterform")}</h1>
      <Form 
        className="m-5 d-flex flex-column justify-content-around"
        onSubmit={handleForm}
      >
        <FormGroup>
          <FormControl
            className="p-4 mb-3"
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <Button
          type="submit"
          size="sm"
          block
          >
          {t("createpdf")}
        </Button>
      </Form>                
    </section>
  );
};
    
export default Registerform;