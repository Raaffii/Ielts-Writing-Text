import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Signup from "./Singup/Signup";
import NavBar from "./NavBar/NavBar";
import MainTest from "./Main/MainTest";
import Input from "./Main/Input";
import Result from "./Main/Result";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className='utama'
      style={{
        backgroundImage: "url('/assets/langitSiang.png')",
        backgroundColor: "blue",
      }}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path='/test'
            element={
              <MainTest>
                {" "}
                <Input />
              </MainTest>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route
            path='/result'
            element={
              <MainTest>
                {" "}
                <Result />
              </MainTest>
            }
          />
          <Route path='/*' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
