import React from "react";
import styled, { keyframes } from "styled-components";
import smoke from "../images/smoke.png";
import { SpinLeft, SpinRight, Extraslow, Slow, Medium, Fast, Extrafast } from "./Spins";
import { lightestgray, mediumgray, charcoal, mint, darkmint, coral, darkcoral, cream, GrayGradient, MintGradient, CoralGradient } from "./Colors";
import ButtonList from "./ColorButtons/ButtonList";
import Button from "./ColorButtons/Button";



const BodyContainer = styled.div`
  margin: 0px;
  left: 0;
  right: 0;
  `;

const SmokeBackground = styled.div`
  position: relative;
  /* display: block; */
  box-sizing: border-box;
  margin: -5vw -10vw 0 -10vw;
  height: 70vh;
  width: 110vw;
  /* align-items: center; */
  /* justify-content: center; */
  overflow: hidden;
  background: ${charcoal};
  `;

const BackImage = styled.img`
  position: absolute;
  opacity: .7;
  height: 2400px;
  left: -600px;
  top: -500px;
  width: auto;
  margin: 0px;
  animation: ${SpinRight} ${Extraslow} linear infinite;
`;

const MiddleImage = styled.img`
  position: absolute;
  left: -300px;
  top: -20px;
  opacity: .6;
  width: auto;
  margin: 0px;
  height: 1400px;
  animation: ${SpinLeft} ${Slow} linear infinite;
`;

const FrontImage = styled.img`
  position: absolute;  
  left: 250px;
  top: -160px;
  opacity: .8;
  width: auto;
  margin: 0px;
  height: 1700px;
  animation: ${SpinRight} ${Extraslow} linear infinite;
  `;

const BottomImage = styled.img`
  position: absolute;  
  left: -300px;
  top: 200px;
  /* opacity: .5; */
  width: auto;
  margin: 0px;
  height: 2200px;
  animation: ${SpinLeft} ${Fast} ease-in-out infinite;
  `;



const BodyContent = () => (
  <BodyContainer>
    <SmokeBackground>
      <BackImage src={smoke} alt="Smoke" />
      <MiddleImage src={smoke} alt="Smoke" />
      <FrontImage src={smoke} alt="Smoke" />
      <BottomImage src={smoke} alt="Smoke" />
    </SmokeBackground>
    {/* <ButtonList /> */}
      <Button />
  </BodyContainer>
  );




export default BodyContent;