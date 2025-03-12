import "./App.css"

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
function App() {

  return (
    <>
  <Navbar/>
  <Hero country="US"  heading="AUDI" description="Audi is my favorite car but sadly i can't afford it !" image="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grzwSWC7XPNk9YO-lHtbAx79ye33EdrxhYgboYtYAEcyGQ4HsDJDiVGMAkyLwCEJEA4jM5MTMwsFYAGZEMICCoYUAkEGZ3cQ1x9PQJBgASieoX2QAAAA.webp?wid=180"/>

  <Hero country="UK" isDirectionLeft={true}  heading="FERRARI" description="Ferrari is my favorite car but sadly i can't afford it !" image="https://cdn.ferrari.com/cms/network/media/img/resize/670e71044cfd1f0079c40e2c-ferrari-f80-lineup-mobile?width=800&height=600"/>


  <Hero country="Pakistan" heading="ALTO !" description="Alto is my favorite car and i can afford it !" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDLz3_YAQp02WoAGAc7_S9nesOOdUVYY9FQ&s"/>
  <Products/>
    </>
  )
}

export default App
