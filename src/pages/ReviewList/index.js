import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewBox from '../../components/ReviewBox';
import ReviewCard from '../../components/ReviewCard';
import Axios from '../../lib/axios';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const fetchAllReviews = async () => {
    try {
      const res = await Axios.get('/lecture', { headers: { Authorization: token || '' } });
      console.log('데이터 패치 완료', res);
      setReviews(res.data);
    } catch (e) {
      console.log('리뷰 패치 에러 발생', e);
    }
  };

  useEffect(() => {
    fetchAllReviews();
  }, []);

  return (
    <ReviewBox>
      <ReviewWrap>
        {reviews.map(review => (
          <ReviewCard
            key={review.id}
            logo={review.agency}
            lecturer={review.trainerName}
            subject={review.category}
            title={review.title}
            content={review.content}
            rating={review.stared}
            onClick={() => navigate(`/review-detail/${review.id}`)}
          />
        ))}
      </ReviewWrap>
    </ReviewBox>
  );
};

const ReviewWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  width: 830px;
  height: 700px;
  gap: 9px 10px;
  margin-top: 60px;
`;

export default ReviewList;
