import styled from '@emotion/styled';
import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Inputs = ({ name, value, onChange, placeholder, styletype }) => {
  const isPassword = name === 'password' || name === 'rePassword';
  return (
    <Wrap>
      <InputContent
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        disableUnderline={true}
        styletype={styletype}
        type={isPassword ? 'password' : 'text'}
      />
      {styletype !== 'form' && <Icon />}
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 375px;
`;

const InputContent = styled(Input)`
  background-color: #ffffff80;
  border-radius: 20px;
  ${({ styletype }) =>
    styletype === 'form'
      ? `
    width: 781px;
    height: 100px;
    font-size: 30px;
    padding-left: 57px;
  `
      : `
    width: 375px;
    height: 59px;
    font-size: 15px;
    padding-left: 30px;
  `}
`;

const Icon = styled(SearchIcon)`
  position: absolute;
  right: 12px;
  top: 18px;
`;

export default Inputs;
