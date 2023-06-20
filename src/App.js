import "./App.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Navbar from "./components/Navbar1";
import React, { useState } from "react";
import About1 from "./components/About1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#042743";
      showAlert("Light Mode Enabled!", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtility" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Form showAlert={showAlert} />} />
          <Route exact path="/About1" element={<About1 />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
