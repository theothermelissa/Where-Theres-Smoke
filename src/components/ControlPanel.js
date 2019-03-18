import React from "react";
import styled from 'styled-components';
import ImageControls from './ImageControls';
import ButtonList from './ColorButtons/ButtonList';


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
//   }
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

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  `;



const ControlPanel = (props) => {
  // console.log(props)

  // name, max, min, handleChange, defaultValue, formatter, firstIcon, secondIcon
  // setBackgroundColor={(backgroundColor) => this.setState({backgroundColor})}

  return (
    <ControlsContainer>
      <ButtonList {...props} layerName="background" />
      <ImageControls {...props} layerName="lower" />
      <ImageControls {...props} layerName="back" />
      <ImageControls {...props} layerName="middle" />
      <ImageControls {...props} layerName="front" />
    </ControlsContainer>
  );
};

// ReactDOM.render(<ControlPanel min={0} max={20} />, mountNode);

export default ControlPanel;