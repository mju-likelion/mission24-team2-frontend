import PageContainer from '../../components/PageContainer';
import Inputs from '../../components/Inputs';
import Sign from '../../components/Sign';
import Buttons from '../../components/Button';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Axios from '../../lib/axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const initForm = {
    email: '',
    password: '',
    rePassword: '',
    nickname: '',
  };

  const navigate = useNavigate();
  const [form, setForm] = useState(initForm);
  const { email, password, rePassword, nickname } = form;

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const emailPattern =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  const vaildMessages = {
    email: '이메일이 올바르지 않습니다.',
    password: '8자리 이상 입력하세요.',
    rePassword: '입력하신 비밀번호와 다릅니다.',
    nickname: '3글자 이상 입력하세요.',
  };

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [rePasswordVaild, setRePasswordVaild] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);
  const [isSubmitPossible, setIsSubmitPossible] = useState(false);

  const inputVaild = type => {
    let msg = null;
    if (type === 'email' && !emailValid && email) {
      msg = vaildMessages.email;
    }

    if (type === 'password' && !passwordValid && password) {
      msg = vaildMessages.password;
    }

    if (type === 'rePassword' && !rePasswordVaild && rePassword) {
      msg = vaildMessages.rePassword;
    }

    if (type === 'nickname' && !nicknameValid && nickname) {
      msg = vaildMessages.nickname;
    }

    return msg;
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const req = await Axios.post('/client', {
        email: email,
        password: password,
        nickname: nickname,
      });
      alert('회원가입 완료');
      navigate('/');
      return req.data;
    } catch (e) {
      throw new Error(`회원가입 에러 ${e}`);
    }
  };

  useEffect(() => {
    setEmailValid(email !== '' && email.match(emailPattern) !== null);
    setPasswordValid(password.length >= 8);
    setRePasswordVaild(password === rePassword && rePassword !== '');
    setNicknameValid(nickname.length >= 3);
  }, [email, password, rePassword, nickname]);

  useEffect(() => {
    setIsSubmitPossible(!(emailValid && passwordValid && rePasswordVaild && nicknameValid));
  }, [emailValid, passwordValid, rePasswordVaild, nicknameValid, isSubmitPossible]);

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
        <Error>{inputVaild('email')}</Error>
        <Inputs
          name='password'
          value={password}
          onChange={onChange}
          placeholder='비밀번호'
          styletype='form'
        />
        <Error>{inputVaild('password')}</Error>
        <Inputs
          name='rePassword'
          value={rePassword}
          onChange={onChange}
          placeholder='비밀번호 재입력'
          styletype='form'
        />
        <Error>{inputVaild('rePassword')}</Error>
        <Inputs
          name='nickname'
          value={nickname}
          onChange={onChange}
          placeholder='닉네임'
          styletype='form'
        />
        <Error>{inputVaild('nickname')}</Error>
        <Buttons isSumbit isSubmitPossible={isSubmitPossible} fontSize='30px'>
          가입 완료
        </Buttons>
      </Sign>
    </PageContainer>
  );
};

const Error = styled.div`
  width: 100%;
  color: red;
  margin-left: 0;
`;

export default SignUp;
