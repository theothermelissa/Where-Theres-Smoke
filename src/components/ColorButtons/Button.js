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
  margin: 5px;
  min-width: 200px;
  border: 0;
  border-radius: 7px;
  background-color: ${ ({color}) => color };
  
  `;

const Button = ({ name, hexValue }) => (
  // <ButtonContainer>
    <ColorButton color={hexValue}>
      <ColorName>
        {name}
      </ColorName>
    </ColorButton>
  // </ButtonContainer>
);

export default Button;