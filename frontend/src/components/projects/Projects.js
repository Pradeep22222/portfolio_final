import React from "react";
import {
  ProjectsContainer,
  StyledProjects,
} from "../../style/projects/ProjectStyles";
import {
  SectionHeading,
  SectionTitle,
} from "../../style/projects/sectionHeading";
import {
  StyledLink,
  StyledParagraph,
} from "../../style/projects/TypographyStyle";
import ProjectCardComponent from "./projectCard";
import { projectsData } from "./projectsData";

export const Projects = () => {
  return (
    // =========== projects =============
    <StyledProjects id="projects">
      {/* ========== Heading =============== */}
      <SectionHeading>
        <SectionTitle number="01">Projects</SectionTitle>
      </SectionHeading>
      {/* =========== paragraph ============= */}
      <StyledParagraph dark="true" textAlign="center">
        Selected projects I've worked on recently.{" "}
        <StyledLink
          href="https://github.com/bishalk21"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want to see more?
        </StyledLink>
      </StyledParagraph>
      {/* ========== Projects ========== */}
      <ProjectsContainer>
        {projectsData.map((project) => {
          return <ProjectCardComponent key={project.id} {...project} />;
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
};
