import React from "react";
import { Parallax } from "react-parallax";
import {
  ParallaxContainer,
  ParallaxText,
} from "../../style/parallax/parallaxStyle";
import parralaxImage from "../../assets/quote-background.jpg";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-200} style={{ width: "100%" }}>
      <ParallaxContainer>
        <ParallaxText>
          "No Sacrification means <br />
         no achievements"
        </ParallaxText>
      </ParallaxContainer>
    </Parallax>
  );
};

export default ParallaxComponent;
