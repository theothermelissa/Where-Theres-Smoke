import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import smoke from "../images/smoke.png";
import { SpinLeft, SpinRight, Extraslow, Slow, Medium, Fast, Extrafast } from "./Spins";
import ButtonList from "./ColorButtons/ButtonList";
import colors from "./colorsForButtons";
import SpeedSlider from './SpeedSlider';
import ImageControls from './ImageControls';

const { lightestgray, mediumgray, charcoal, mint, darkmint, coral, darkcoral, cream } = colors;



const BodyContainer = styled.div`
  margin: -5vw;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 110%;
  height: 110%;
  align-items: center;
  background-color: ${cream};
  `;

const SmokeBackground = styled.div`
  position: relative;
  /* display: block; */
  box-sizing: border-box;
  /* margin: -5vw -10vw 0 -10vw; */
  height: 70vh;
  width: 110vw;
  /* align-items: center; */
  /* justify-content: center; */
  overflow: hidden;
  background: ${props => props.backgroundColor};
  `;

const BackImage = styled.img`
  position: absolute;
  opacity: .7;
  height: 2400px;
  left: -600px;
  top: -500px;
  width: auto;
  margin: 0px;
  animation: ${SpinRight} ${Extraslow} linear infinite;
`;

const MiddleImage = styled.img`
  position: absolute;
  left: -300px;
  top: -20px;
  opacity: .6;
  width: auto;
  margin: 0px;
  height: 1400px;
  animation: ${SpinLeft} ${Slow} linear infinite;
`;

const FrontImage = styled.img`
  position: absolute;  
  left: 250px;
  top: -160px;
  opacity: .8;
  width: auto;
  margin: 0px;
  height: 1700px;
  animation: ${SpinRight} ${Extraslow} linear infinite;
  `;

const BottomImage = styled.img`
  position: absolute;  
  left: -300px;
  top: 200px;
  /* opacity: .5; */
  width: auto;
  margin: 0px;
  height: 2200px;
  /* animation: ${SpinLeft} ${Fast} ease-in-out infinite; */
  animation: ${SpinLeft} ${props => props.speed} ease-in-out infinite;
  /* animation-direction: ${props => props.direction};
  animation-duration: ${props => props.speed};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite; */
  `;

const SliderContainer = styled.div`
  position: relative;
  `;

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: charcoal,
      speed: 40,
    }
    // this.state = {
    //   imageID: "",
    //   speed: "",
    //   direction: "",
    //   opacity: "",
    //   size: "",
    // }
  }
  
  render() {
    const speedInSeconds = `${this.state.speed}s`;
    return (
      <BodyContainer>
      <SmokeBackground backgroundColor={this.state.backgroundColor}>
        <BackImage src={smoke} alt="Smoke" />
        <MiddleImage src={smoke} alt="Smoke" />
        <FrontImage src={smoke} alt="Smoke" />
        <BottomImage src={smoke} alt="Smoke" speed={speedInSeconds} />
      </SmokeBackground>
      <ButtonList setBackgroundColor={(backgroundColor) => this.setState({backgroundColor})}/>
      <ImageControls handleSpeedChange={this.handleSpeedChange}/>
    </BodyContainer>
  )}

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
};




export default BodyContent;