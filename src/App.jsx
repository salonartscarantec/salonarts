import { useState } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector} from "react-redux";
import Cookies from "js-cookie";
import Home from "pages/Home";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import FlashMessage from "components/layout/FlashMessage";
import PublicRoute from "components/PublicRoute";

const App = () => {
  const displayFlash = useSelector((state) => state.flash.display);

  const [language, setLanguage] = useState('fr');

  return (
    <section className="App">
      <Router>
        <Navbar setLanguage={setLanguage} lang={language}/>
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
              component={Home}
              path="/"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Home}
              path="/"
              exact
            />
          </Switch>
       
        <Footer />
      </Router>
    </section>
  );
};

export default App;
