import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";

const Index = () => (
  <Layout>
    <Navbar />
    <Hero />
    <About />
  </Layout>
);

export default Index;
