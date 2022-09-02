import styled from '@emotion/styled';

const LoginBox = () => {
  return (
    <LoginDiv>
      <TopDiv>
        <DefaultEllipse />
        <InfoText>로그인 해주세요</InfoText>
      </TopDiv>
      <LoginText>로그인</LoginText>
    </LoginDiv>
  );
};

const LoginDiv = styled.div`
  width: 300px;
  height: 90px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  color: #000000;
  margin-top: 10%;
  padding: 30px;
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
`;

const DefaultEllipse = styled.div`
  width: 60px;
  height: 60px;
  background: #ffffff;
  border-radius: 50%;
  display: inline-block;
`;

const InfoText = styled.p`
  color: #000000;
  font-size: 20px;
  display: inline-block;
  margin-left: 20px;
`;

const LoginText = styled.p`
  color: #000000;
  font-size: 15px;
  margin-top: 19px;
  margin-left: 170px;
`;

export default LoginBox;
