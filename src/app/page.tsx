import HeroSection from "./components/Hero";
import Hero from "./components/Herotest";
import Navbar from "./components/navbar";
import Slider from "./components/caraousel";
import Service from "./components/service";
import Footer from "./components/footer";



export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />  

      <Hero />  

      <Slider/> 

      <Service />

      <Footer />

    </>
  );
}
