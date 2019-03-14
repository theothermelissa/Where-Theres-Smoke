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




const ButtonList = () => {
return (
  <ButtonContainer> {
    _.toPairs(colors).map( foo => (
        <Button key={foo[1]} name={foo[0]} hexValue={foo[1]} />
    ))
  }</ButtonContainer>
)}

  
  
  // <ButtonHolder>
  //   <Button />
  // </ButtonHolder>


export default ButtonList;