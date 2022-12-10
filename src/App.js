import {BrowserRouter, Routes, Route} from "react-router-dom";
import Insert from "./pages/Insert";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/insert" element={<Insert />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
