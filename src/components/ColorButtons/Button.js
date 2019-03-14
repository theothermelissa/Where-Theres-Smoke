import React from "react";
import styled from "styled-components";

const ColorName = styled.h2`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  `;

const ColorButton = styled.button`
  margin: 5px;
  min-width: 200px;
  padding: 10px;
  border: 0px;
  border-radius: 15px;
  background-color: ${ ({color}) => color };
  `;

const Button = ({ name, hexValue }) => (
    <ColorButton color={hexValue}>
      <ColorName>
        {name}
      </ColorName>
    </ColorButton>
);

export default Button;