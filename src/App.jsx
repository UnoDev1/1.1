
import "./App.css";
import Industries from "./components/Industries";
import MyFooter from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Global from "./components/Global";
import PioneeringExperties from "./components/PioneeringExperties";
import Careers from "./components/Careers";
import AboutUs from "./components/AboutUs";

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <PioneeringExperties />
      <Industries />
      <Global />
      <Careers />
      <AboutUs />
      <MyFooter />
      
    </>
  );
}

export default App;
