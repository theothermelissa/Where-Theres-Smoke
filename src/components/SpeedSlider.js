import React from "react";
import { Slider, Icon } from 'antd';
import styled from 'styled-components';

const MAX_SPEED = 300;
const MIN_SPEED = 15;


const SliderWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 30vw;
  padding: 0px 30px;
  .anticon {
    position: absolute;
    margin-top: 0px;
    top: -2px;
    width: 16px;
    height: 16px;
    line-height: 1;
    font-size: 16px;
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

const formatter = value => {
  return `${value}s`;
}

const SpeedSlider = ({ max, min, handleSpeedChange }) => (
<SliderWrapper>
  <Icon type="frown-o" />
  <Slider onChange={handleSpeedChange} min={min || MIN_SPEED} max={max || MAX_SPEED} tipFormatter={formatter} />
  <Icon type="smile-o" />
</SliderWrapper>
);

export default SpeedSlider;
