import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import InfoData from "../../info.json"
import fs from "fs/promises";
import path from "path";

export interface IndexProps {
  portfolioData: typeInfo
}

const Index: React.FC<IndexProps> = ({ portfolioData }) => {
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
  const portfolioData: typeInfo = JSON.parse(jsonData);

  return {
    props: {
      portfolioData,
    },
  };
}

export default Index;

export type typeInfo = typeof InfoData
