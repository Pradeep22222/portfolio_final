import React from "react";
import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  MobileButton,
  MobileSocials,
  MobileSocial,
  MobileQuote,
  CloseText,
} from "../../style/navbar/MobileMenuStyles";

export const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseText>Close</CloseText>
        <CloseIcon />
      </Icon>
      <MobileMenuList>
        <MobileMenuLink to="home" onClick={toggle}>
          Home
        </MobileMenuLink>
        <MobileMenuLink to="projects" onClick={toggle}>
          Projects
        </MobileMenuLink>
        <MobileMenuLink to="about" onClick={toggle}>
          About
        </MobileMenuLink>
        <MobileMenuLink to="playground" onClick={toggle}>
          Blogs
        </MobileMenuLink>
        <MobileButton
          href="mailto:karkibishal00@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
              get in touch
            </span>
          </span>
        </MobileButton>
      </MobileMenuList>
      <MobileSocials>
        <MobileSocial
          href="mailto:karkibishal00@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-envelope"></i> GM
        </MobileSocial>
        <MobileSocial
          href="https://github.com/monciego"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GH
        </MobileSocial>

        <MobileSocial
          href="https://www.linkedin.com/in/bishalk21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LI
        </MobileSocial>
      </MobileSocials>
      <MobileQuote>Namaste 🙏</MobileQuote>
    </MobileMenuContainer>
  );
};
