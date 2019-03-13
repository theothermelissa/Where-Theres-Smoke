import React, { Component } from "react";
import styled from "styled-components";
import smoke from "./images/smoke.png";

const backImage = styled.img`
  position: absolute;
  opacity: .7;
  left: 100px;
  top: -250px;
  width: auto;
  margin: 0px;
  /* object-fit: cover; */
  height: 2400px;
`;

const BackgroundSmoke = () => (
  <backImage src={smoke} alt="Smoke" />
);

export default BackgroundSmoke;