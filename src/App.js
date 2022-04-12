import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Explore from "./Components/Explore/Explore";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import './App.css';


function App() {
    return ( <div className = "App">
      <Nav></Nav>
        <Header> </Header> 
        <Explore></Explore>
        <AboutUs></AboutUs>
        <Footer></Footer> 
         </div>
    );
}

export default App;