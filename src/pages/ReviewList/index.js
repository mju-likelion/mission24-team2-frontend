import PageContainer from '../../components/PageContainer';
import styled from '@emotion/styled';
import { useState } from 'react';
import LoginBox from '../../components/LoginBox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SmallLogo from '../../img/svg/SmallLogo';
import Inputs from '../../components/Inputs';

const ReviewList = () => {
  const [alignment, setAlignment] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const onInputChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <PageContainer>
      <SmallLogo />
      <Inputs name='searchInstructor' value={searchText} onChange={onInputChange} styletype='' />
      <ToggleWrap>
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
      </ToggleWrap>
      <LoginBox></LoginBox>
    </PageContainer>
  );
};

const ToggleWrap = styled.div``;

export default ReviewList;
