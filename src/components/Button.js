import styled from '@emotion/styled';
import { Button } from '@mui/material';

const Buttons = ({ width, height, fontSize, isSubmitPossible, isSumbit, children, onClick }) => {
  return (
    <ButtonBox
      onClick={onClick}
      disabled={isSubmitPossible}
      width={width}
      heigh={height}
      fontSize={fontSize}
      type={isSumbit ? 'submit' : 'button'}
    >
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
