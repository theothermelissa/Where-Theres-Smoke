import React from "react";
import styled from 'styled-components';
import SliderInput from './SliderInput';
import { Radio } from 'antd';


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

//     handleChange,
//     name,
//     max,
//     min,
//     defaultValue,
//     formatter,
//     firstIcon,
//     secondIcon

// const defaultProps = {
//   speed: {
//     name: "Speed",
//     max: MAX_SPEED,
//     min: MIN_SPEED,
//     defaultValue: 150,
//     formatter: speedFormatter,
//     firstIcon: "caret-up",
//     secondIcon: "caret-down",
//   },
//   opacity: {
//     name: "Opacity",
//     max: MAX_SPEED,
//     min: MIN_SPEED,
//     defaultValue: 150,
//     formatter: opacityFormatter,
//     firstIcon: "caret-down",
//     secondIcon: "caret-up",
//   },
//   size: {
//     name: "Size",
//     max: MAX_SIZE,
//     min: MIN_SIZE,
//     defaultValue: 1000,
//     formatter: sizeFormatter,
//     firstIcon: "caret-down",
//     secondIcon: "caret-up",
//   }
// }

const RadioGroup = Radio.Group;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  `;


class DirectionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      direction: 'Left',
    }
  }
  onChange = (dir) => {
    // console.log("changed");
    this.setState({
      direction: dir.target.value,
    });
  }
  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.direction}>
        <Radio value={"Left"}>Left</Radio>
        <Radio value={"Right"}>Right</Radio>
      </RadioGroup>
    );
  }
};

const ImageControls = (props) => {


  return (
    <ControlsContainer>
      <SliderInput {...props} />
      <DirectionButtons />
    </ControlsContainer>
  );
};

// ReactDOM.render(<ImageControls min={0} max={20} />, mountNode);

export default ImageControls;