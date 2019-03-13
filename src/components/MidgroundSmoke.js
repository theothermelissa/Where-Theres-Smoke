import React, { Component } from "react";
import styled from "styled-components";
import smoke from "./images/smoke.png";

const middleImage = styled.img`
  position: absolute;
  left: -100px;
  top: -420px;
  opacity: .8;
  width: auto;
  margin: 0px;
  height: 1400px;
  /* object-fit: cover; */
`;

const MidgroundSmoke = () => (
  <middleImage src={smoke} alt="Smoke" />
)

export default MidgroundSmoke;