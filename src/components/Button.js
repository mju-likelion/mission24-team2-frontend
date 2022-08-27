import styled from '@emotion/styled';
import { Button } from '@mui/material';

const Buttons = ({ width, height, fontSize, children }) => {
  return (
    <ButtonBox width={width} heigh={height} fontSize={fontSize}>
      {children}
    </ButtonBox>
  );
};

const ButtonBox = styled(Button)`
  background-color: #ffffff66;
  border-radius: 20px;
  color: #343434;
  width: ${props => (props.width ? props.width : '246px')};
  height: ${props => (props.height ? props.height : '95px')};
  font-size: ${props => (props.fontSize ? props.fontSize : '15px')};
  :hover {
    background-color: #ffffffcc;
  }
`;

export default Buttons;
