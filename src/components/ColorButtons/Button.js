import React from "react";
import styled from "styled-components";

const ColorName = styled.h2`
  color: white;
  font-size: .9em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  `;

const ColorButton = styled.button`
  margin: 3px;
  min-width: 120px;
  padding: 3px;
  border: 3px solid white;
  border-radius: 15px;
  background-color: ${ ({color}) => color };
  `;


const Button = ({ name, hexValue, setBackgroundColor }) => (
    <ColorButton color={hexValue} onClick={() => setBackgroundColor(hexValue)} >
      <ColorName>
        {name}
      </ColorName>
    </ColorButton>
);

export default Button;