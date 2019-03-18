import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import smoke from "../images/smoke.png";
import { spin, spinLeft, spinRight, Extraslow, Slow, Medium, Fast, Extrafast } from "./Spins";
import ButtonList from "./ColorButtons/ButtonList";
import colors from "./colorsForButtons";
import ControlPanel from './ControlPanel';
import ImageControls from './ImageControls';

const { lightestgray, mediumgray, charcoal, mint, darkmint, coral, darkcoral, cream } = colors;

const speedInSeconds = (speed) => {
  console.log("Speed in seconds: ", `${speed}s`);
  return `${speed}s`
};
const sizeInPixels = (size) => {
  console.log("Height in pixels: ", `${size}px`);
  return `${size}px`
};

const BodyContainer = styled.div`
  margin: -5vw;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 110%;
  height: 110%;
  align-items: center;
  background-color: whitesmoke;
  `;

const SmokeBackground = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 70vh;
  width: 110vw;
  overflow: hidden;
  background: ${props => props.backgroundColor};
  `;

// const BackImage = styled.img`
//   position: absolute;
//   opacity: .7;
//   height: 2400px;
//   left: -600px;
//   top: -500px;
//   width: auto;
//   margin: 0px;
//   animation-direction: ${({ direction }) => spin(direction)};
//   animation-duration: ${ ({ speed }) => speedInSeconds };
//   animation-timing-function: linear; 
//   animation-iteration-count: infinite;
// `;

// const MiddleImage = styled.img`
//   position: absolute;
//   left: -300px;
//   top: -20px;
//   opacity: .6;
//   width: auto;
//   margin: 0px;
//   height: 1400px;
//   animation-direction: ${({ direction }) => spin(direction)};
//   animation-duration: ${ ({ speed }) => speed };
//   animation-timing-function: linear; 
//   animation-iteration-count: infinite;
// `;

// const FrontImage = styled.img`
//   position: absolute;  
//   left: 250px;
//   top: -160px;
//   opacity: .8;
//   width: auto;
//   margin: 0px;
//   height: 1700px;
//   animation-direction: ${({ direction }) => spin(direction)};
//   animation-duration: ${ ({ speed }) => speed };
//   animation-timing-function: linear; 
//   animation-iteration-count: infinite;
//   `;

const LowerImage = styled.img`
  /* name: ${props => props.name}; */
  position: absolute;  
  left: ${props => sizeInPixels(props.lower.leftPosition)};
  top: ${props => sizeInPixels(props.lower.topPosition)};
  opacity: ${props => props.lower.opacity};
  width: auto;
  margin: 0px;
  height: ${props => sizeInPixels(props.lower.size)};
  animation: ${props => spin(props.lower.direction)} ${ props => speedInSeconds(props.lower.speed) } ease-in-out infinite;
  `;

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: {
        color: charcoal,
      },
      lower: {  
        // imageID: "",
        leftPosition: -350,
        topPosition: 200,
        speed: 100,
        direction: "left",
        opacity: .9,
        size: 2200,
      },
      back: {  
        // imageID: "",
        speed: 150,
        direction: "left",
        size: 2400,
        opacity: .5,
      },
      middle: {  
        // imageID: "",
        speed: 150,
        direction: "left",
        size: 1400,
        opacity: .5,
      },
      front: {  
        // imageID: "",
        speed: 150,
        direction: "left",
        opacity: .5,
        size: 1700,
      },
    }
  }

  render() {
    return (
      <BodyContainer>
      <SmokeBackground backgroundColor={this.state.background.color}>
        {/* <BackImage src={smoke} alt="Smoke" />
        <MiddleImage src={smoke} alt="Smoke" />
        <FrontImage src={smoke} alt="Smoke" /> */}
        <LowerImage {...this.state} src={smoke} alt="Smoke" />
      </SmokeBackground>
      {/* <ButtonList handleChange={this.handleChange}/> */}
      {/* <ButtonList setBackgroundColor={(backgroundColor) => this.setState({backgroundColor})}/> */}
      <ControlPanel {...this.state} handleChange={this.handleChange} />
    </BodyContainer>
  )}

  handleChange = (imageName, property, value) => {
    console.log("Before: ", this.state);
    // console.log({ [imageName]:{[property]: value }})
    this.setState({ [imageName]:{[property]: value }});
    console.log("After: ", this.state);
  }
};


export default BodyContent;