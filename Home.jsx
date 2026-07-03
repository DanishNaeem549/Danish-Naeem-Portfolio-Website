import Seo from "../components/Seo.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import WhyHireMe from "../components/WhyHireMe.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";

const Home = () => {
  return (
    <>
      <Seo
        title="Danish Naeem | Front-End & React Developer"
        description="Front-End and React.js Developer building fast, responsive, production-grade web applications."
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyHireMe />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
