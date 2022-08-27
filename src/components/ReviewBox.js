import PageContainer from './PageContainer';
import styled from '@emotion/styled';
import { Children, useState } from 'react';
import LoginBox from './LoginBox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Logo from '../img/svg/Logo';
import Inputs from './Inputs';

const ReviewBox = ({ children }) => {
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
      <Wrap>
        <SideBar>
          <Logo width={'300'} height={'54'} />
          <Inputs
            name='searchInstructor'
            value={searchText}
            onChange={onInputChange}
            styletype=''
          />
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
        </SideBar>
        <ChildBox>{children}</ChildBox>
      </Wrap>
    </PageContainer>
  );
};

const ToggleWrap = styled.div``;

const Wrap = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  width: 420px;
`;

const ChildBox = styled.div`
  background-color: red;
`;

export default ReviewBox;
