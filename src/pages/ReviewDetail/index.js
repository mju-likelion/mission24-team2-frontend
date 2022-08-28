import ReviewBox from '../../components/ReviewBox';
import PostContainer from '../../components/postContainer';
import Axios from '../../lib/axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetail = () => {
  const router = useParams();
  const { id } = router;
  const token = localStorage.getItem('token');
  const [post, setPost] = useState();

  const fetchReview = async () => {
    console.log(router.id);
    try {
      const res = await Axios.get(`review?reviewId=${id}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res.data);
      setPost(res.data);
    } catch (e) {
      console.log('데이터 패치 에러', e);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);
  return <ReviewBox>{post && <PostContainer post={post} />}</ReviewBox>;
};

export default ReviewDetail;
