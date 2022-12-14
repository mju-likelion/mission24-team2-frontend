import React, { useState } from 'react';
import styled from '@emotion/styled';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import megastudy from '../img/megastudy.png';
import etoos from '../img/etoos.png';
import daesung from '../img/daesung.png';

const PostContainer = ({ post }) => {
  let pic = '';
  const navigate = useNavigate();
  if (post.site == '메가스터디') {
    pic = megastudy;
  } else if (post.site == '이투스') {
    pic = etoos;
  } else {
    pic = daesung;
  }

  return (
    <Contents>
      <Icon
        onClick={() => {
          navigate('/review-list');
        }}
      >
        <ArrowBackIosNewIcon />
      </Icon>
      <TopDiv>
        <Logo>
          <img src={pic || 'https://via.placeholder.com/150'} alt='샘플이미지' width={200} />
        </Logo>
        <BoxTitle>
          <SmallGray>과목</SmallGray>
          <Title>{post.category || '???'}</Title>
        </BoxTitle>
        <BoxTitle>
          <SmallGray>강사명</SmallGray>
          <Title>{post.lecturer || '???'}</Title>
        </BoxTitle>
        <BoxTitle>
          <SmallGray>강의명</SmallGray>
          <Title>{post.lecture || '강의를 찾을 수 없습니다.'}</Title>
        </BoxTitle>
      </TopDiv>
      <LineDiv>
        <SmallGray>제목</SmallGray>
        <SmallBlack>{post.title || '강의를 찾을 수 없습니다.'}</SmallBlack>
      </LineDiv>
      <LineDiv>
        <SmallGray>작성자</SmallGray>
        <SmallBlack>{post.postId || '시골집**'}</SmallBlack>
      </LineDiv>
      <LineDiv>
        <SmallGray>평점</SmallGray>
        <RatingDiv>
          <Rating name='read-only' value={post.stared || '0'} readOnly precision={0.5} />
        </RatingDiv>
      </LineDiv>
      <LineDiv>
        <SmallGray>내용</SmallGray>
        <Text>{post.content || '강의를 찾을 수 없습니다.'}</Text>
      </LineDiv>
    </Contents>
  );
};

const Contents = styled.div`
  width: 60%;
  min-height: 500px;
  border-radius: 20px;
  margin-top: 60px;
  margin-left: 30px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: row;
  width: 100%;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  display: flex;
  margin-left: 110px;
  margin-right: 50px;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const SmallBlack = styled.p`
  font-size: 20px;
  color: #000000;
`;

const SmallGray = styled.p`
  font-size: 20px;
  color: #898989;
  margin-bottom: 5px;
  width: 100px;
`;

const Title = styled.p`
  font-size: 25px;
  color: #000000;
  margin-top: 10px;
`;

const BoxTitle = styled.div`
  margin-top: 70px;
  margin-bottom: 150px;
`;

const LineDiv = styled.div`
  display: flex;
  width: 1100px;
  margin-left: 110px;
  margin-bottom: 24px;
  margin-right: 129px;
`;

const Text = styled.p`
  width: 850px;
  font-size: 20px;
  color: #000000;
  line-height: 30px;
  margin-top: -5px;
`;

const Icon = styled.button`
  width: 20px;
  margin-left: 95%;
  margin-top: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const RatingDiv = styled.div`
  margin-top: -3px;
  margin-left: 5px;
  width: 1100px;
`;

export default PostContainer;
