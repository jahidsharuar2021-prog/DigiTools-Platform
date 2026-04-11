import { Suspense } from "react";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/NavbarAndBanner/Hero";
import Navbar from "./Components/NavbarAndBanner/Navbar";
import Rating from "./Components/NavbarAndBanner/Rating";
import Cards from "./Components/premiumTools/Cards";

import WorkSection from "./Components/Your Work/WorkSection";
import Degitools from "./Components/premiumTools/Degitools";
import { ToastContainer } from "react-toastify";
import ThreeStep from "./Components/ThreeStep/ThreeStep";
import TransparentPricing from "./Components/Transparent Pricing/TransparentPricing";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchData();

  return (
    <>
      <Navbar />
      <Hero />
      <Rating />
      <Suspense
        fallback={<span className="loading loading-dots loading-md"></span>}
      >
        <Cards fetchPromise={fetchPromise} />
      </Suspense>

      <ThreeStep/>
      <TransparentPricing/>
      <WorkSection />
      <Footer />

    {/* react toastify alert */}
      <ToastContainer />
    </>
  );
}

export default App;
