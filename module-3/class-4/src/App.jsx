
import Navbar from "../src/components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import ProductCard from "./components/ProductCard/ProductCard"
import Products from "./components/Products/Products"

function App() {

  return (
    <>
    <Navbar/>
    <Hero heading="Audi SUV Sedan" image="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grzwSWC7XPNk9YO-lHtbAx79ye33EdrxhYgboYtYAEcyGQ4HsDJDiVGMAkyLwCEJEA4jM5MTMwsFYAGZEMICCoYUAkEGZ3cQ1x9PQJBgASieoX2QAAAA.webp?wid=180"
    
    
    description="Introducing the all-new Audi Q6 e-tron, a premium mid-size all-electric SUV that boasts an EPA-estimated range of 321 miles (RWD equipped with Ultra package)—allowing you to get where you want to go in state-of-the-art style."
    />


    <Hero
    isDirectionLeft={true}

    heading="Audi MPG" image="https://images.dealer.com/ddc/vehicles/2025/Audi/A5/Hatchback/still/front-left/front-left-320-en_US.jpg?impolicy=resize&w=320"
    
    
    description="Introducing the all-new Audi Q6 e-tron, a premium mid-size all-electric SUV that boasts an EPA-estimated range of 321 miles (RWD equipped with Ultra package)—allowing you to get where you want to go in state-of-the-art style."
    />
  
  <Products/>
    </>
  )
}

export default App
