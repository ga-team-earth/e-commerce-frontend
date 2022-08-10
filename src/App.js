import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/Home"
import Shop from "./routes/shop/Shop";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Nav from "./routes/navigation/Navigation";
import Order from "./routes/order/Order";
import "./App.scss"


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="Shop/*" element={<Shop />}/>
        <Route path="/Order" element={<Order />}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
