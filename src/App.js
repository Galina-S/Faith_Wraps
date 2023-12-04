import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import icon from "./img/faith_wraps_icon.jpg";

function App() {
  return (
    <>
      <Router>
        
        <div className="App">
        <Header />
          <div className="App-header">
            <p style={{margin:"30px"}}>Faith Wraps. Changing cars in something beautiful.</p>
            <img src={icon} alt="Icon" style={{maxWidth:"90%", height: "auto", margin:"20px"}}></img>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
