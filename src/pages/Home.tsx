// pages/Home.tsx

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero/>
      <About />
      <Projects/>
      <Technologies/>
      <Certificates/>
      <Footer/>
    </>
  );
};

export default Home;