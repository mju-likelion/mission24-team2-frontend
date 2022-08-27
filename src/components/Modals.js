import styled from '@emotion/styled';
import { Modal, Card, Button, Container } from '@mui/material';
import { useState } from 'react';

const Modals = ({ clickBtn }) => {
  // modal을 위한 state
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <MainContainer>
      <Button onClick={() => setModalOpen(true)}>{clickBtn}</Button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalBox>
          <p>로그인 이후 사용 할 수 있습니다!</p>
          <Button variant='outlined'>로그인</Button>
        </ModalBox>
      </Modal>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  width: 200px;
`;

const ModalBox = styled(Card)`
  width: 400px;
  height: 150px;
  border-radius: 20px;
  margin: auto;
  padding: 10px;
  margin-top: 300px;
  text-align: center;
  line-height: 70px;
`;

export default Modals;
