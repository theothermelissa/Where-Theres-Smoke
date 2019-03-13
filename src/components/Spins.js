import styled from "styled-components";

const extraslow = "270s";
const slow = "200s";
const medium = "150s";
const fast = "90s";
const extrafast = "15s";
const SpinRight = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
  `;
const SpinLeft = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
  `;

export const BackgroundSpin = styled.div`
  animation: ${SpinLeft} ${extraslow} ease-in-out infinite;
  `;


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

// BackgroundSpin, ExtraSlowSpin, SlowSpin, MediumSpin, FastSpin, ExtraFastSpin