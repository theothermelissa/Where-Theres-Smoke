import React from "react";
import styled from "styled-components";
import Button from './Button';
import colors from "../colorsForButtons";
import _ from "lodash";

// const { lightestgray, mediumgray, charcoal, mint, darkmint, coral, darkcoral, cream } = colors;

const ButtonContainer = styled.span`
  display: flex;
  flex-flow: row wrap;
  width: 60%;
  margin: 30px;
  align-items: center;
  justify-content: center;
  `;




const ButtonList = ({ setBackgroundColor }) => {

  return (
    <ButtonContainer> {
    _.toPairs(colors).map( ([colorName, hexValue]) => (
        <Button setBackgroundColor={setBackgroundColor} key={hexValue} name={colorName} hexValue={hexValue} />
    ))
  }</ButtonContainer>
)}
// setBackgroundColor(hexValue)
  
  
  // <ButtonHolder>
  //   <Button />
  // </ButtonHolder>


export default ButtonList;