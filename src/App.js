import React from "react";
import Registration from "./pages/Registration";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
function App() {
  return (
    <div className="App">
      {/* ROUTER */}
      <NavBar />
      {/* SWITCH */}
      <Registration />

      <Footer />
    </div>
  );
}

export default App;
