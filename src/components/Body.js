import React from "react";
import styled, { keyframes } from "styled-components";
import smoke from "../images/smoke.png";
import { BackgroundSpin, ExtraSlowSpin, SlowSpin, MediumSpin, FastSpin, ExtraFastSpin } from "./Spins";
import { lightestgray, mediumgray, charcoal, mint, lightmint, coral, lightcoral, cream, GrayGradient, MintGradient, CoralGradient } from "./Colors";

const SmokeBackground = styled.div`
  /* display: block;
  position: fixed;
  margin: 0px;
  height: 80vh;
  width: 100%;
  overflow: hidden; */
  background-color: black;
  `;

// const backImage = styled.img`
//   position: absolute;
//   opacity: .7;
//   left: 100px;
//   top: -250px;
//   width: auto;
//   margin: 0px;
//   /* object-fit: cover; */
//   height: 2400px;
// `;

// const middleImage = styled.img`
//   position: absolute;
//   left: -100px;
//   top: -420px;
//   opacity: .8;
//   width: auto;
//   margin: 0px;
//   height: 1400px;
//   /* object-fit: cover; */
// `;

// const frontImage = styled.img`
//   position: absolute;  
//   left: 0px;
//   top: -360px;
//   opacity: .5;
//   width: auto;
//   margin: 0px;
//   height: 1700px;
//   /* object-fit: cover; */
//   `;


const Body = () => (
  <SmokeBackground>
    {/* <backImage src={smoke} alt="Smoke" />
    <middleImage src={smoke} alt="Smoke" />
    <frontImage src={smoke} alt="Smoke" /> */}
  </SmokeBackground>
  );




export default Body;