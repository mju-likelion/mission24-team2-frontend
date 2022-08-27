import { styled } from '@mui/material/styles';
import { ToggleButton } from '@mui/material';
import { useState } from 'react';

const ToggleBtn = ({ title, handleClick }) => {
  return (
    <MyToggleBtn value={title} onClick={handleClick}>
      {title}
    </MyToggleBtn>
  );
};

const MyToggleBtn = styled(ToggleButton)({
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  borderRadius: '15px',
  color: '#0000000',
  width: '300px',
  fontSize: '20px',
  ' &:hover': {
    backgroundColor: '#a0a3d6ce',
  },
});
export default ToggleBtn;
