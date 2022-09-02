import PageContainer from './PageContainer';
import styled from '@emotion/styled';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Logo from '../img/svg/Logo';
import Inputs from './Inputs';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ReviewBox = ({ onFilter, children }) => {
  const navigate = useNavigate();
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
          <Logo width={'380'} height={'54'} />
          <Button
            variant='outlined'
            sx={{ marginBottom: '10px' }}
            onClick={() => navigate('/write')}
          >
            글쓰기
          </Button>
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
              sx={{ gap: '20px' }}
            >
              <ToggleButton
                sx={{
                  width: '360px',
                  backgroundColor: ' rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  fontSize: '20px',
                  WebkitJustifyContent: 'left',
                  paddingLeft: '20px',
                }}
                onClick={onFilter}
                value='국어'
              >
                국어
              </ToggleButton>
              <ToggleButton
                sx={{
                  width: '360px',
                  backgroundColor: ' rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  fontSize: '20px',
                  WebkitJustifyContent: 'left',
                  paddingLeft: '20px',
                }}
                onClick={onFilter}
                value='수학'
              >
                수학
              </ToggleButton>
              <ToggleButton
                sx={{
                  width: '360px',
                  backgroundColor: ' rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  fontSize: '20px',
                  WebkitJustifyContent: 'left',
                  paddingLeft: '20px',
                }}
                onClick={onFilter}
                value='영어'
              >
                영어
              </ToggleButton>
              <ToggleButton
                sx={{
                  width: '360px',
                  backgroundColor: ' rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  fontSize: '20px',
                  WebkitJustifyContent: 'left',
                  paddingLeft: '20px',
                }}
                onClick={onFilter}
                value='한국사'
              >
                한국사
              </ToggleButton>
              <ToggleButton
                sx={{
                  width: '360px',
                  backgroundColor: ' rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  fontSize: '20px',
                  WebkitJustifyContent: 'left',
                  paddingLeft: '20px',
                }}
                onClick={onFilter}
                value='사탐'
              >
                사탐
              </ToggleButton>
              <ToggleButton
                sx={{
                  width: '360px',
                  backgroundColor: ' rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  fontSize: '20px',
                  WebkitJustifyContent: 'left',
                  paddingLeft: '20px',
                }}
                onClick={onFilter}
                value='과탐'
              >
                과탐
              </ToggleButton>
            </ToggleButtonGroup>
          </ToggleWrap>
        </SideBar>
        {children}
      </Wrap>
    </PageContainer>
  );
};

const ToggleWrap = styled.div`
  margin-top: 20px;
`;

const Wrap = styled.div`
  display: flex;
  padding: 30px;
`;

const SideBar = styled.div`
  width: 420px;
`;

export default ReviewBox;
