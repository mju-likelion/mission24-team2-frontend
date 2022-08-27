import React from 'react';
import { Card, Rating } from '@mui/material';
import styled from '@emotion/styled';

const ReviewCard = ({ logo, lecturer, subject, title, content, rating }) => {
  return (
    <Cards>
      <CardContent>
        <PlatformLogo src={logo} alt='로고 이미지'></PlatformLogo>
        <LecturereCont>
          <Lecturer>{lecturer}</Lecturer>
          <Subject>{subject}</Subject>
        </LecturereCont>
        <ReviewTitle>{title}</ReviewTitle>
        <Content>{content}</Content>
        <Rating defaultValue={rating} precision={0.5} readOnly />
      </CardContent>
    </Cards>
  );
};

const PlatformLogo = styled.img`
  margin: 20px;
  width: 100px;
  height: 100px;
`;

const LecturereCont = styled.div`
  display: flex;
`;

const Lecturer = styled.p`
  margin: 10px 30px;
  font-size: 13px;
`;

const Subject = styled.p`
  font-size: 12px;
  margin: 10px;
  color: #4f4f4f;
`;

const ReviewTitle = styled.p`
  font-size: 14px;
`;

const Content = styled.div`
  padding: 10px;
  background-color: #d6e5fa;
  border-radius: 20px;
  margin: 10px;
  height: 60px;
`;

const CardContent = styled.div`
  margin: auto;
  padding: 20px 10px;
`;

const Cards = styled(Card)`
  width: 200px;
  height: 300px;
  border-radius: 20px;
  text-align: center;
`;

export default ReviewCard;
