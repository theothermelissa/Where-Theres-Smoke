import React from "react";
import styled from "styled-components";


// const ButtonContainer = styled.div`
//   display: flex;
//   width: 10%;
//   align-items: center;
//   justify-content: center;
//   `;

const ColorName = styled.h2`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  `;

const ColorButton = styled.button`
  display: block; 
  margin: 5vw;
  padding: .5em;
  border-radius: 7px;
  background-color: red;
  `;

const Button = () => (
  // <ButtonContainer>
    <ColorButton>
      <ColorName>
        Tomato
      </ColorName>
    </ColorButton>
  // </ButtonContainer>
);

export default Button;