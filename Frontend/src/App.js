import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/home";
import Product from "./pages/Product";
import { BrowserRouter, Route, Link ,withRouter} from "react-router-dom";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar}>
          <a>
            <Link to="/">Home</Link>
          </a>

          {/* <Link to="/product">product</Link> */}
        </Navbar>
        <div className="app_container">
          <Route path="/" exact={true} component={Home} />
          <Route path="/product/:id" exact={true} component={Product} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
