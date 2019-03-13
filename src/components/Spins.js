import React, { Component } from "react";
import styled from "styled-components";
// import smoke from "./images/smoke.png"

const SpinRight = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const SpinLeft = keyframes`
from { transform: rotate(360deg); }
to { transform: rotate(0deg); }
`;

const extraslow = "270s";
const slow = "200s";
const medium = "150s";
const fast = "90s";
const extrafast = "15s";

export const ExtraSlowSpin = styled.div`
  animation: ${SpinRight} ${extraslow} linear infinite;
`;

export const SlowSpin = styled.div`
  animation: ${SpinRight} ${slow} linear infinite;
`;

export const MediumSpin = styled.div`
  animation: ${SpinRight} ${medium} linear infinite;
`;

export const FastSpin = styled.div`
  animation: ${SpinRight} ${fast} linear infinite;
`;

export const ExtraFastSpin = styled.div`
  animation: ${SpinRight} ${extrafast} linear infinite;
`;

// ExtraSlowSpin, SlowSpin, MediumSpin, FastSpin, ExtraFastSpin