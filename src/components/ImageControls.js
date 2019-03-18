import React from "react";
import styled from 'styled-components';
import SliderInput from './SliderInput';
// import { Radio } from 'antd';
import DirectionButtons from './DirectionButtons';
import { charcoal } from './colors';


const MAX_SPEED = 300;
const MIN_SPEED = 15;
const MIN_SIZE = 500;
const MAX_SIZE = 2500;
const MIN_OPACITY = 0;
const MAX_OPACITY = 100;


const speedFormatter = value => {
  return `${value}s`;
};
const opacityFormatter = value => {
  return `${value}%`;
};
const sizeFormatter = value => {
  return `${value}px`;
};

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${charcoal};
  margin: 3px;
  `;

const ControlsTitle = styled.h2`
  color: ${charcoal};
  `;

const ImageControls = (props) => {
  // console.log("Props passed to ImageControls: ", props);
  const { handleChange, imageName } = props;
  const layerSettings = props[imageName];

  return (
    <ControlsContainer >
      <ControlsTitle >{imageName}</ControlsTitle>
      <DirectionButtons name={imageName} direction={layerSettings.direction} setDirection={(directionValue) => handleChange(imageName, "direction", directionValue)} />
      <SliderInput {...props} />
    </ControlsContainer>
  );
};

// ReactDOM.render(<ImageControls min={0} max={20} />, mountNode);

export default ImageControls;