import Axios from '../../lib/axios';
import Sign from '../../components/Sign';
import Inputs from '../../components/Inputs';
import PageContainer from '../../components/PageContainer';
import Buttons from '../../components/Button';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navagate = useNavigate();
  const initForm = {
    email: '',
    password: '',
  };

  const [form, setForm] = useState(initForm);
  const { email, password } = form;

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    try {
      const req = await Axios.put('/client', {
        email: form.email,
        password: form.password,
      });
      localStorage.setItem('token', req.data.token);
      navagate('/');
      return req.data;
    } catch (e) {
      if (e.request.status === 400) {
        alert('일치하는 회원이 없습니다.');
      }
      throw new Error(`로그인 에러 ${e}`);
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    login();
  };

  return (
    <PageContainer>
      <Sign onSubmit={onSubmit}>
        <Inputs
          name='email'
          value={email}
          onChange={onChange}
          placeholder='이메일'
          styletype='form'
        />
        <Inputs
          name='password'
          value={password}
          onChange={onChange}
          placeholder='비밀번호'
          styletype='form'
        />
        <ButtonBox>
          <Buttons isSumbit>로그인</Buttons>
          <Buttons onClick={() => navagate('/sign-up')}>회원가입</Buttons>
        </ButtonBox>
      </Sign>
    </PageContainer>
  );
};

const ButtonBox = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 17px;
`;

export default SignIn;
