import ReviewBox from '../../components/ReviewBox';
import PostContainer from '../../components/postContainer';

const ReviewDetail = () => {
  const post = {
    site: '이투스',
    category: '국어',
    teacher: '국어쌤',
    lecture: '국어다',
    title: '강의평 이름',
    postId: '닉네임',
    rating: '3',
    postContents: '임시임시임시',
  };
  return (
    <>
      <ReviewBox>
        <PostContainer post={post} />
      </ReviewBox>
    </>
  );
};

export default ReviewDetail;
