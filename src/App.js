import "./App.css";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Header from './EcomerseWebsite/Headers';
import Homes from "./EcomerseWebsite/Homes";
import Cart from "./EcomerseWebsite/Cart";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homes />}>
          
        </Route>
        <Route path='/cart' element={<Cart />}>
        </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

