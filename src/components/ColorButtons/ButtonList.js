import React from "react";
import styled from "styled-components";
import Button from './Button';
import colors from "../colorsForButtons";
import _ from "lodash";

const ButtonContainer = styled.span`
  display: flex;
  flex-flow: row wrap;
  width: 60%;
  margin: 30px;
  align-items: center;
  justify-content: center;
  `;

const ButtonList = ({ handleChange, layerName }) => {
  const setColor = (hexValue) => {
    console.log(hexValue);
    return (
      handleChange("background", "color", hexValue)
  )};

  return (
    <ButtonContainer> {
    _.toPairs(colors).map( ([colorName, hexValue]) => (
        <Button setBackgroundColor={setColor} key={hexValue} name={colorName} hexValue={hexValue} />
    ))
  }</ButtonContainer>
)};


export default ButtonList;