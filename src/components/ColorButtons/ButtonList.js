import React from "react";
import styled from "styled-components";
import { lightestgray, mediumgray, charcoal, mint, darkmint, coral, darkcoral, cream, GrayGradient, MintGradient, CoralGradient } from "../Colors";
import Button from './Button';

const ButtonHolder = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  `;




const ButtonList = () => (
  <ButtonHolder>
    <Button />
  </ButtonHolder>

  );

export default ButtonList;