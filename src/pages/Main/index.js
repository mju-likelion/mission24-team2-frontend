import PageContainer from '../../components/PageContainer';
import styled from '@emotion/styled';
import { useState } from 'react';
import LoginBox from '../../components/LoginBox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Main = () => {
  const [alignment, setAlignment] = useState('');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <PageContainer>
      <ToggleButtonGroup
        color='primary'
        value={alignment}
        exclusive
        orientation='vertical'
        onChange={handleChange}
        aria-label='Platform'
      >
        <ToggleButton value='국어'>국어</ToggleButton>
        <ToggleButton value='수학'>수학</ToggleButton>
        <ToggleButton value='영어'>영어</ToggleButton>
        <ToggleButton value='한국사'>한국사</ToggleButton>
        <ToggleButton value='사탐'>사탐</ToggleButton>
        <ToggleButton value='과탐'>과탐</ToggleButton>
      </ToggleButtonGroup>
      <LoginBox></LoginBox>
    </PageContainer>
  );
};

export default Main;
