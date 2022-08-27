import React from 'react';
import styled from '@emotion/styled';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import megastudy from '../img/megastudy.png';
import etoos from '../img/etoos.png';
import daesung from '../img/daesung.png';

const PostContainer = ({ post }) => {
  let pic = '';
  //const navigate = useNavigate();
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
          alert('홈으로 이동하는 버튼');
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
          <Title>{post.category || '국어'}</Title>
        </BoxTitle>
        <BoxTitle>
          <SmallGray>강사명</SmallGray>
          <Title>{post.techer || '박은서'}</Title>
        </BoxTitle>
        <BoxTitle>
          <SmallGray>강의명</SmallGray>
          <Title>
            {post.lecture || '2023 김동욱클래스, 장Class - 수능 국어의 실전을 대비하다'}
          </Title>
        </BoxTitle>
      </TopDiv>
      <LineDiv>
        <SmallGray>제목</SmallGray>
        <SmallBlack>
          {post.title ||
            '쥐구멍마저 볕이 들게 해주시는 이 시대의 진정한 성군께, 그리고 그 제자들에게'}
        </SmallBlack>
      </LineDiv>
      <LineDiv>
        <SmallGray>작성자</SmallGray>
        <SmallBlack>{post.postId || 'pes1149'}</SmallBlack>
      </LineDiv>
      <LineDiv>
        <SmallGray>평점</SmallGray>
        <RatingDiv>
          <Rating name='read-only' value={post.rating} readOnly precision={0.5} />
        </RatingDiv>
      </LineDiv>
      <LineDiv>
        <SmallGray>내용</SmallGray>
        <Text>
          {post.postContents ||
            '현재 월클래스까지 강의가 나올 때마다 꼬박꼬박 들어온 좨수생(죄수 + 재수생)입니다'}
        </Text>
      </LineDiv>
    </Contents>
  );
};

const Contents = styled.div`
  width: 1226px;
  min-height: 940px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 0 30px;
`;

const Logo = styled.div`
  display: flex;
  position: absolute;
  left: 60px;
  top: 10px;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 36px;
  margin-right: 15px;
  margin-bottom: 40px;
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
  margin-left: -5px;
  line-height: 30px;
`;

const Icon = styled.button`
  width: 20px;
  margin-left: 1150px;
  margin-top: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const RatingDiv = styled.div`
  margin-top: -3px;
  width: 1100px;
`;

export default PostContainer;
