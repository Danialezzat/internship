import { Route, BrowserRouter, Routes } from "react-router-dom";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Problemi from "./components/Problemi";
import Dashboard from "./components/Dashboard";
import NuovoProblema from "./components/NuovoProblema";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard  />} >
            <Route path="problemi" element={<Problemi />} />
            <Route path="nuovoproblema" element={<NuovoProblema />} />
          </Route>
         <Route path="/*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
