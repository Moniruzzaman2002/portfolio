import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contac from "./pages/Contac";
import {Routes,Route} from "react-router-dom"
function App() {

  
  return (
    <>
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/features" element={<Features/>}/>
  <Route path="/pricing" element={<Pricing/>}/>
  <Route path="/faq" element={<Faq/>}/>
  <Route path="/contac" element={<Contac/>}/>
  </Routes>
  
      </>
  );
}

export default App;
