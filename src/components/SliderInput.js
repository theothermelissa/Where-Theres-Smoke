import React from "react";
import { Slider, Icon } from 'antd';
import styled from 'styled-components';

const Tray = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  `;

const SliderName = styled.h3`
  /* font-size: 1.5em; */
  color: rgba(0, 0, 0, .25);
  `;

const SliderBox = styled.div`
  /* display: flex; */
  /* flex-flow: row wrap; */
  position: relative;
  width: 80vw;
  padding: 0px 30px;
  .anticon {
    position: absolute;
    margin-top: 0px;
    top: -2px;
    width: 16px;
    height: 16px;
    line-height: 1;
    /* font-size: 16px; */
    color: rgba(0, 0, 0, .25);
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
  }
  .ant-slider {
    margin-top: 0;
  }
`;

const SliderInput = (props) => {
  const { 
    handleChange,
    imageName,
    max,
    min,
    defaultValue,
    formatter,
    firstIcon,
    secondIcon 
  } = props;

  const changeSetting = (imageName, property, value) => {
    console.log("Change value to: ", value);
    return (
      handleChange(imageName, property, value)
    )
  };

  return (
    <Tray>
      <SliderName>{name}</SliderName>
      <SliderBox>
        <Icon type={firstIcon} />
        <Slider onChange={changeSetting} min={min} max={max} tipFormatter={formatter} />
        <Icon type={secondIcon} />
      </SliderBox>
    </Tray>
  )
};

export default SliderInput;

