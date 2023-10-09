import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import fs from "fs/promises";
import path from "path";

const Index = ({ portfolioData }) => {
  return (
    <Layout>
      <Navbar />
      <Hero heroSection={portfolioData.heroSection} />
      <About about={portfolioData.aboutSection.html} />
      <Experience experienceArray={portfolioData.experienceSection} />
    </Layout>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "info.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const portfolioData = JSON.parse(jsonData);

  return {
    props: {
      portfolioData,
    },
  };
}

export default Index;
