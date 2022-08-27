import React from 'react';
import styled from '@emotion/styled';

const PageContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.div`
  width: 100%;
  height: inherit;
  background: linear-gradient(121.44deg, #f0bfd2 0%, #cdcff5 41.09%, #c7efef 97.92%);
`;

export default PageContainer;
