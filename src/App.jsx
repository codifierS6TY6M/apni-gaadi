import Header from "./Components/header/Header";
import Home from "./Components/Pages/Home";
import './App.css'
import Offerings from "./Components/offerings/Offerings";
import Info from "./Components/Info/Info";
import Info2 from "./Components/Info2/Info2";
import Info3 from "./Components/Info3/Info3";
import Catagories from "./Components/Catagories/Catagories";
import Product1 from "./Components/Product1/Product1";
import Product2 from "./Components/Product2/Product2";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="grey-gradient" />
        <Header />
        <div className="grey-gradient2" />
        <Home />
      </div>
      <div className="red-gradient" />
      <Offerings />
      <div className="sky-gradient" />
      <div className="grey-gradient3" />
      <Info />
      <div className="sky-gradient2" />
      <Info2 />
      <Info3 />
      <div className="red-gradient2" />
      <Product1 />
      <div className="sky-gradient3" />
      <Product2 />
      <Catagories />
      <Footer />
    </div>
  );
}

export default App;
