import React from 'react';
import { Card, Rating } from '@mui/material';
import styled from '@emotion/styled';
import megastudy from '../img/megastudy.png';
import etoos from '../img/etoos.png';
import daesung from '../img/daesung.png';

const ReviewCard = ({ onClick, logo, lecturer, subject, title, content, rating }) => {
  return (
    <Cards onClick={onClick}>
      <CardContent>
        {logo === '이투스' && <PlatformLogo src={etoos} alt='로고 이미지' />}
        {logo === '메가스터디' && <PlatformLogo src={megastudy} alt='로고 이미지' />}
        {logo === '대성마이맥' && <PlatformLogo src={daesung} alt='로고 이미지' />}
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
  margin: 1px 20px;
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
  /* display: -webkit-box; */
  padding: 10px;
  background-color: #d6e5fa;
  border-radius: 10px;
  margin: 10px;
  width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* word-wrap: break-word; */
  white-space: nowrap;
  height: 60px;
  /* -webkit-line-clamp: 3;
  line-height: 1.2em;
  -webkit-box-orient: vertical; */
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
  :hover {
    cursor: pointer;
  }
`;

export default ReviewCard;
