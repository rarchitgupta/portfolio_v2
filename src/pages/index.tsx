import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Projects } from "../sections/Projects";
import { Footer } from "../sections/Footer";
import InfoData from "../../info.json";
import fs from "fs/promises";
import path from "path";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Archit Gupta",
  description: "Softwaare Engineer and Web Developer",
};

export interface IndexProps {
  portfolioData: typeInfo;
}

const Index: React.FC<IndexProps> = ({ portfolioData }) => {
  return (
    <Layout>
      <Navbar
        resumeLink={portfolioData.experienceSection.resumeLink}
        socialLinks={portfolioData.contactAndFooterSection.socialLinks}
      />
      <Hero
        heroSection={portfolioData.heroSection}
        socialLinks={portfolioData.contactAndFooterSection.socialLinks}
      />
      <About about={portfolioData.aboutSection.html} />
      <Experience
        experienceArray={portfolioData.experienceSection.experiences}
        resumeLink={portfolioData.experienceSection.resumeLink}
      />
      <Projects
        projectsArray={portfolioData.projectSection.projects}
        githubLink={portfolioData.projectSection.githubLink}
      />
      <Footer
        email={portfolioData.contactAndFooterSection.email}
        socialLinks={portfolioData.contactAndFooterSection.socialLinks}
      />
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

export type typeInfo = typeof InfoData;
