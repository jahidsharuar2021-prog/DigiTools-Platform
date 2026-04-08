import Footer from "./Components/Footer/Footer";
import Hero from "./Components/NavbarAndBanner/Hero";
import Navbar from "./Components/NavbarAndBanner/Navbar";
import Rating from "./Components/NavbarAndBanner/Rating";
import Cards from "./Components/premiumTools/Cards";
import Degitools from "./Components/premiumTools/Degitools";
import WorkSection from "./Components/Your Work/WorkSection";




function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Rating />
      <Degitools />
    
      <WorkSection />
      <Footer />
    </>
  );
}

export default App
