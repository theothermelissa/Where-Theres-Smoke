import React from "react";
import { Slider, Icon } from 'antd';
import styled from 'styled-components';

const MAX_SPEED = 300;
const MIN_SPEED = 15;


const SliderWrapper = styled.div`
  position: relative;
  width: 40vw;
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
class SpeedSlider extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      value: MIN_SPEED,
    }
  };

  handleChange = (value) => {
    this.setState({ value });
  }
  
  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    return (
      <SliderWrapper>
        <Icon style={{ color: preColor }} type="frown-o" />
        <Slider {...this.props} onChange={this.handleChange} min={min || MIN_SPEED} max={max || MAX_SPEED} tipFormatter={formatter} value={value} />
        <Icon style={{ color: nextColor }} type="smile-o" />
      </SliderWrapper>
    );
  }
}

// ReactDOM.render(<SpeedSlider min={0} max={20} />, mountNode);

export default SpeedSlider;