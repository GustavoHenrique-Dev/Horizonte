import { BrowserRouter, Routes, Route } from "react-router-dom";

import Style from "./App.module.css";
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className={Style.container}>
        <Header />
        <div className={Style.pages}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/properties" element={<Properties />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
