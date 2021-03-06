import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider'

const renderRangeSlider = props => {
  return (
    <Slider
      id="averageInvoiceValue"
      className="custom"
      max={Number(props.max)}
      min={Number(props.min)}
      value={props.input.value}
      tooltip={false}
      step={Number(props.step)}
      orientation={props.orientation}
      labels={props.labels}
      onChange={value => props.input.onChange(value)}
    />
  );
};

renderRangeSlider.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
};

export default renderRangeSlider;
