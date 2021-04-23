import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
    
  return (
    <div className='Register'>
      <h1>This is Register</h1>
      <Link to="/registerform">{t("linkregisterform")}</Link>
    </div>
  );
};
    
export default Register;