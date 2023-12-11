import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Tarifs from "./pages/tarifs/Tarifs";
import Contacts from "./pages/contacts/Contacts";
import FAQ from "./pages/faq/FAQ";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/tarifs" element={<Tarifs/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/faq" element={<FAQ/>} />
      </Routes>
    </div>
  );
}

export default App;
