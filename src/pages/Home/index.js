import styled from '@emotion/styled';
import Buttons from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import Logo from '../../img/svg/Logo';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Content>
        <ContentBox>
          <Logo />
          <Buttons
            width='464px'
            height='117px'
            fontSize='50px'
            onClick={() => {
              navigate('/review-list');
            }}
          >
            시작하기
          </Buttons>
        </ContentBox>
      </Content>
    </PageContainer>
  );
};

const Content = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
`;

export default Home;
