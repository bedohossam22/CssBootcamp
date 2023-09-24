import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Myinfo from "./components/Myinfo";
import "./style.css";
import Lightboxo from "./components/Lightboxo";
import Testo from "./components/Testo";
import Happyclient from "./components/Happyclients";
export default function App() {
  
  return (
    <div className="App">
      <Home />
      <Myinfo/>
      <Happyclient/>
      <Lightboxo />
      <Testo/>
      
    </div>
  );
}


