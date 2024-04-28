import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Rajiv!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    
     <VStack>
      <Avatar src="https://avatars.githubusercontent.com/u/140334488?s=400&u=1609ad95423712749a9fb132ec583e912a6c3cf6&v=4" size="xl" />
      <div>
      {greeting}
      </div>
      <div></div>
      <div></div>
      <div></div>

      
      </VStack>
      <VStack spacing={3}>
        <Heading>
         {bio1}
         </Heading>
         <Heading>
         {bio2}
        </Heading>
      </VStack>
      
     
     
    
  </FullScreenSection>
);

export default LandingSection;
