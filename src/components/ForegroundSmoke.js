import React, { Component } from "react";
import styled from "styled-components";
import smoke from "./images/smoke.png";
import { SpinRight, SpinLeft } from "./Spins";

const frontImage = styled.img`
  position: absolute;  
  left: 0px;
  top: -360px;
  opacity: .5;
  width: auto;
  margin: 0px;
  height: 1700px;
  /* object-fit: cover; */
`;

// ${props => props.primary && css`
//     background: palevioletred;
//     color: white;
//   `}

const ForegroundSmoke = () => (
  <frontImage src={smoke} alt="Smoke" />
)

export default ForegroundSmoke;