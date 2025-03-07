import "./App.css";
import ProductCard from "./components/ProductCard";
import f1 from "./assets/images/f1.jpeg"
import f2 from "./assets/images/f2.jpeg"
import f3 from "./assets/images/f3.webp"

function App() {
  return (
    <>
      <ProductCard name="Ferrari-1" image={f1}/>
      <ProductCard name="Ferrari-2" image={f2}/>
      <ProductCard name="Ferrari-3" image={f3}/>
     
    </>
  );
}

export default App;
