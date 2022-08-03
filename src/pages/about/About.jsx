import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <div>
    <AboutContainer>
      <StyledImage src={codingSvg}></StyledImage>
      <HeaderContainer>
        Software Developer <span>Ahmet Nuri Uygun</span>
      </HeaderContainer>
      <InfoContainer>
      Hi, I'am Ahmet Nuri

I'm currently learning Full-Stack Development Languages.

I've already known HTML, CSS, SASS, Bootstrap, JS, ReactJS, Python.

<a>Send email</a>  :  ahmetn.uygun@gmail.com
      </InfoContainer>
    </AboutContainer>
    </div>
  );
};

export default About;
