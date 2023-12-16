import { Routes, Route } from "react-router-dom";

import ExaminationOne from "./MyFirstThree.js/firstExperience";
import ExaminationTwo from "./MyTwoThree.js/twoExperience";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/One" element={<ExaminationOne />}></Route>
        <Route path="/Two" element={<ExaminationTwo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
