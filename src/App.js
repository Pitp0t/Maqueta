import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Footer from "./components/footer";
import Header from './components/Header'
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";
import Homepage from "./pages/Homepage";





function App() {
  return (
    <div className="app">
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LogIn />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
