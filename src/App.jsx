
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar.jsx";
import Products from "./components/Products/Products.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Provider } from "react-redux";
import generateStore from "./store.js";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer.jsx";


function App() {
  const store = generateStore();
 
  return (
    <Provider store={store}>
      <NavBar/>
    <Routes>
      <Route path = '/' element={<Home/>}>
      <Route exact path ='/' element = {<Products/>}></Route>
      <Route path = 'contact' element = {<Contact/>}></Route>
      </Route>
    </Routes>
    <Footer/>
    </Provider>
    )
  };
  export default App;