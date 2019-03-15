import React from "react";
import styled from 'styled-components';
import SliderInput from './SliderInput';
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



const ControlPanel = (...props) => {

  // name, max, min, handleChange, defaultValue, formatter, firstIcon, secondIcon

  return (
    <ControlsContainer>
      <ButtonList />
      <ImageControl >
        <SliderInput />
    </ImageControl>
    </ControlsContainer>
  );
};

// ReactDOM.render(<ControlPanel min={0} max={20} />, mountNode);

export default ControlPanel;