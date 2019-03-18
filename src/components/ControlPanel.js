import React from "react";
import styled from 'styled-components';
import ImageControls from './ImageControls';
import ButtonList from './ColorButtons/ButtonList';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  `;

const ControlPanel = (props) => {
  return (
    <ControlsContainer>
      <ButtonList {...props} imageName="background" />
      <ImageControls {...props} imageName="lower" />
      <ImageControls {...props} imageName="back" />
      <ImageControls {...props} imageName="middle" />
      <ImageControls {...props} imageName="front" />
    </ControlsContainer>
  );
};

export default ControlPanel;