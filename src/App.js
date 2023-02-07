import "./App.css";
import EarthDay from "./Pages/EarthDay";
import Pokemon from "./Pages/Pokemon";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<EarthDay />}></Route>
          <Route exact path='/Pokemon' element={<Pokemon />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
