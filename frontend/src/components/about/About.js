import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../../style/about/AboutStyles";
import myImage from "../../assets/me1.jpeg";
// import myImage from "../../assets/me2.jpeg";
import resume from "../../assets/bishalresume.pdf";
import downloadIcon from "../../assets/icons/download-icon.svg";
import {
  SectionHeading,
  SectionTitle,
} from "../../style/projects/sectionHeading";
import { StyledParagraph } from "../../style/projects/TypographyStyle";

export const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Bishal Karki, currently pursuing Bachelor of Information
            Technology. I am a passionate front-end developer based in
            Australia.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites or web apps from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, REACT JS, Bootstrap, Git and
            GitHub, Figma, and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-bishal-karki"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};
