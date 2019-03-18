import React from "react";
import styled from 'styled-components';
import { Radio } from 'antd';
// import { charcoal } from './colors';

const RadioGroup = Radio.Group;

export default class DirectionButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { setDirection, direction } = this.props;
    return (
      <RadioGroup onChange={(event) => setDirection(event.target.value)} value={direction}>
        <Radio value={"left"}>Left</Radio>
        <Radio value={"right"}>Right</Radio>
      </RadioGroup>
    );
  }
};
