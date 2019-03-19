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

const ImageControlsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: 200px;
  width: 100%;
  align-items: start;
  justify-content: center;
  border: 1px solid ${charcoal};
  margin: 3px;
  padding: 3px;
  `;

const ControlsTitle = styled.h2`
  width: 100%;
  color: ${charcoal};
  `;

// handleChange,
// imageName,
// max,
// min,
// defaultValue,
// formatter,
// firstIcon,
// secondIcon 

const ImageControls = (props) => {
  // console.log("Props passed to ImageControls: ", props);
  const { handleChange, imageName } = props;
  const layerSettings = props[imageName];

  return (
    <ImageControlsContainer >
      <ControlsTitle >{imageName}</ControlsTitle>
      <DirectionButtons 
        name={imageName} 
        direction={layerSettings.direction} 
        setDirection={(directionValue) => 
        handleChange(imageName, "direction", directionValue)} />
      <SliderInput 
        name={imageName} 
        property="speed"
        handleChange={handleChange}
        max={MAX_SPEED}
        min={MIN_SPEED}
        defaultValue={layerSettings.speed}
        value={layerSettings.speed}
        formatter={speedFormatter}
        firstIcon="up"
        secondIcon="down"
         />
      <SliderInput 
        name={imageName} 
        property="opacity"
        handleChange={handleChange}
        max={MAX_OPACITY}
        min={MIN_OPACITY}
        defaultValue={layerSettings.opacity}
        value={layerSettings.opacity}
        formatter={opacityFormatter}
        firstIcon="up"
        secondIcon="down"
         />
      <SliderInput 
        name={imageName} 
        property="size"
        handleChange={handleChange}
        max={MAX_SIZE}
        min={MIN_SIZE}
        defaultValue={layerSettings.size}
        value={layerSettings.size}
        formatter={sizeFormatter}
        firstIcon="up"
        secondIcon="down"
         />
    </ImageControlsContainer>
  );
};

// ReactDOM.render(<ImageControls min={0} max={20} />, mountNode);

export default ImageControls;