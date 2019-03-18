import React from "react";
import styled from 'styled-components';
import SliderInput from './SliderInput';
import { Radio } from 'antd';
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

const RadioGroup = Radio.Group;




class DirectionButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { setDirection, direction } = this.props;
    return (
      <RadioGroup onChange={(event) => setDirection(event.target.value)} value={direction}>
        <Radio value={"left"}>Left</Radio>
        <Radio value={"right"}>Right</Radio>
      </RadioGroup>
    );
  }
};


const ImageControls = (props) => {
  console.log("Props passed to ImageControls: ", props);
  const { handleChange, layerName } = props;
  const layerSettings = props[layerName];

  console.log("This Layer's Settings: ", layerSettings);

  const setDirection = (directionValue) => {
    console.log("DirectionValue: ", directionValue);
    return (
      handleChange(layerName, "direction", directionValue)
    )
  }

  // const setSpeed = (speedValue) => {
  //   // console.log(speedValue);
  //   return (
  //     handleChange(layerName, "speed", speedValue)
  // )};
  // // {() => setBackgroundColor(hexValue)}
  
  return (
    <ControlsContainer >
      <ControlsTitle >{layerName}</ControlsTitle>
      <DirectionButtons direction={layerSettings.direction} setDirection={setDirection} />
      <SliderInput {...props} />
    </ControlsContainer>
  );
};

// ReactDOM.render(<ImageControls min={0} max={20} />, mountNode);

export default ImageControls;