import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { useState,useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import { onAuthStateChanged } from "firebase/auth";

import Style from "./App.module.css";
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  const isLoading = user === undefined
  if(isLoading){
    return <p>Carregando...</p>
  }


  return (
    <AuthContextProvider value={{user}}>
      <BrowserRouter>
        <div className={Style.container}>
          <Header />
          <div className={Style.pages}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/properties" element={<Properties />}></Route>
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/"/>}></Route>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
