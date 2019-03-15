import React from "react";
import styled from 'styled-components';
import SpeedSlider from './SpeedSlider';
import OpacitySlider from './OpacitySlider';
import { Radio } from 'antd';
// import RadioGroup from "antd/lib/radio/group";


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

class ImageControls extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      imageID: "",
      speed: "",
      direction: "",
      opacity: "",
      size: "",
    }
  };
  handleSpeedChange = (speed) => {
    this.setState({ speed });
  }
  handleOpacityChange = (opacity) => {
    this.setState({ opacity });
  }
  handleDirectionChange = (direction) => {
    this.setState({ direction });
  }
  handleSizeChange = (size) => {
    this.setState({ size });
  }
  


  render() {
    const {  } = this.props;

    return (
      <ControlsContainer>
        <SpeedSlider />
        <OpacitySlider />
        <DirectionButtons />
      </ControlsContainer>
    );
  }
}

// ReactDOM.render(<ImageControls min={0} max={20} />, mountNode);

export default ImageControls;