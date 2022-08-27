import styled from '@emotion/styled';
import { ToggleButton } from '@mui/material';
import { useState } from 'react';

const ToggleBtn = ({ title, handleClick }) => {
  return (
    <MyToggleBtn value={title} onClick={handleClick}>
      {title}
    </MyToggleBtn>
  );
};

const MyToggleBtn = styled(ToggleButton)`
  background-color: ${props => (props.handleClick ? '#A0A3D6' : 'rgba(255, 255, 255, 0.4)')};
  border-radius: 15px;
  color: ${props => (props.handleClick ? '#ffffff' : '#0000000')};
  width: 300px;
  font-size: 20px;
  -webkit-justify-content: left;
  &:hover {
    background-color: #a0a3d6ce;
  }
`;
export default ToggleBtn;
