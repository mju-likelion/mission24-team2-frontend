import styled from '@emotion/styled';

const Sign = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  width: 781px;
  margin: 0 auto;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px 0;
`;

export default Sign;
