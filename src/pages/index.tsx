import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import info from "../../info.json";

const Index = () => {
  return (
    <Layout>
      <Navbar />
      <Hero heroSection={info.heroSection} />
      <About about={info.aboutSection.html} />
      <Experience />
    </Layout>
  );
};

export default Index;
