import ReviewBox from '../../components/ReviewBox';
import PostContainer from '../../components/postContainer';

const ReviewDetail = () => {
  return (
    <>
      <ReviewBox>
        <PostContainer post={post} />
      </ReviewBox>
    </>
  );
};

export default ReviewDetail;
