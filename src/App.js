import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Tarifs from "./components/tarifs/Tarifs";
import Contacts from "./components/contacts/Contacts";
import FAQ from "./components/faq/FAQ";
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./components/auth/Auth";
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';


function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/tarifs" element={<Tarifs/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/faq" element={<FAQ/>} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
