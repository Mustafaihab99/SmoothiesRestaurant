import { Routes , Route } from "react-router-dom";
import SignUp from "./component/SignUp";
import Home from "./Home";
import Menu from "./component/Menu";
function App() {
  return (
  <div>

    <Routes>
      <Route path="/" element={<Home/>}/>    
      <Route path="/signup" element={<SignUp/>}/>    
      <Route path="/menu" element={<Menu/>}/>    
    </Routes>
  </div>
);
}

export default App;
