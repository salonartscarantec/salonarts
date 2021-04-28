import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector} from "react-redux";
import Home from "pages/Home";
import Navigation from "components/layout/Navigation";
import Footer from "components/layout/Footer";
import FlashMessage from "components/layout/FlashMessage";
import PublicRoute from "components/PublicRoute";
import Register from "pages/Register";
import Contacts from "pages/Contacts";
import Registerform from "pages/Registerform";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const displayFlash = useSelector((state) => state.flash.display);
  const [language, setLanguage] = useState('fr');
  
  useEffect(() => {
    AOS.init({ duration: 400 });
    AOS.refresh();
  }, [])

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
              restricted={false}
              component={Register}
              path="/register"
              exact
            />
            <PublicRoute
              restricted={false}
              component={Contacts}
              path="/contacts"
              exact
            />
            <PublicRoute
              restricted={false}
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
