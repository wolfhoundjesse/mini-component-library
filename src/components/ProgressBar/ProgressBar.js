/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <ProgressBarWrapper 
    role='progressbar' 
    aria-valuenow={value} 
    aria-valuemin='0' 
    aria-valuemax='100'
    size={size} >
      <Progress size={size} value={value} />
    </ProgressBarWrapper>;
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${props => props.size === 'large' ? '4px' : '0'};
  border-radius: ${props => props.size === 'large' ? '8px' : '4px'};
  `
  
  const Progress = styled.div`
  --large: 16px;
  --medium: 12px;
  --small: 8px;
  background-color: ${COLORS.primary};
  height: ${props => `var(--${props.size})`};
  width: ${props => props.value + '%'};
  padding: 4px;
  border-radius: 4px;
  border-top-right-radius: ${props => props.value > 99.5 ? '4px' : 0};
  border-bottom-right-radius: ${props => props.value > 99.5 ? '4px' : 0};
`
export default ProgressBar;
