import { useState } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector} from "react-redux";
import Cookies from "js-cookie";
import Home from "pages/Home";
import Navigation from "components/layout/Navigation";
import Footer from "components/layout/Footer";
import FlashMessage from "components/layout/FlashMessage";
import PublicRoute from "components/PublicRoute";
import Register from "pages/Register";
import Contacts from "pages/Contacts";
import Registerform from "pages/Registerform";

const App = () => {
  const displayFlash = useSelector((state) => state.flash.display);

  const [language, setLanguage] = useState('fr');

  return (
    <section className="App">
      <Router>
        <Navigation setLanguage={setLanguage} language={language}/>
        {displayFlash && <FlashMessage />}
          <Switch>
            <PublicRoute
              restricted={false}
              component={Home}
              path="/"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Register}
              path="/register"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Contacts}
              path="/contacts"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Registerform}
              path="/registerform"
              exact
            />
          </Switch>
        <Footer />
      </Router>
    </section>
  );
};

export default App;
