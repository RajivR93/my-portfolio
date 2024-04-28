import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: rajivbass23@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/RajivR93",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/rajiv-r-aa3a97b7/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={5}>
            {socials.map((social) => {
              return (
                <a href={social.url} className="headerlink">
                  <FontAwesomeIcon icon={social.icon} size="2x"/>
                </a>
              );
            })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects" id= "projects-section" onClick={handleClick}>Projects</a>
              <a href="/#contact-me" id="contactme-section" onClick={handleClick}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;