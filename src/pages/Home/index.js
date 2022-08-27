import styled from '@emotion/styled';
import Buttons from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import WritingReview from '../../components/WirtingReview';
import Logo from '../../img/svg/Logo';

const Home = () => {
  return (
    <PageContainer>
      <Content>
        <ContentBox>
          <Logo />
          <Buttons width='464px' height='117px' fontSize='50px'>
            시작하기
          </Buttons>
          <WritingReview></WritingReview>
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
