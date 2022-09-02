import styled from '@emotion/styled';
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Autocomplete,
  TextField,
  Rating,
  Button,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';

axios.defaults.baseURL = process.env.REACT_APP_API;

const Write = () => {
  const navi = useNavigate();
  const [lecturerList, setLecturereList] = useState([]);
  const [lectureName, setLectureName] = useState('');
  const [lectureid, setLectureid] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewContent, setReviewContent] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인이 필요합니다.');
      navi('/sign-in');
    }
  }, []);
  useEffect(() => {
    axios
      .get('/lecture/filter', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        params: {
          category: '국어',
        },
      })
      .then(res => {
        const trainerList = res.data;
        var list = [];
        trainerList.map(data => list.push(data.trainerName));
        setLecturereList(list);
      });
  }, []);

  const addReview = async data => {
    await axios
      .post(
        '/review/create',
        {
          lectureId: lectureid,
          subject: title.subject,
          stared: rating,
          content: reviewContent.content,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        },
      )
      .then(res => {
        alert('등록완료');
        navi('/review-list');
      });
  };

  const onChangeTitle = e => {
    setTitle({
      ...title,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeContent = e => {
    setReviewContent({
      ...reviewContent,
      [e.target.name]: e.target.value,
    });
  };

  const findLectureName = e => {
    const trainer = e.target.value;
    axios
      .get('/lecture/find', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        params: {
          name: trainer,
        },
      })
      .then(res => {
        const trainerList = res.data;
        var list = [];
        trainerList.map(data => list.push(data.courseName));
        let test = [];
        trainerList.map(data => test.push(data));
        setLectureid(test[0]._id);
      });
  };

  const getLectureName = e => {
    setLectureName(e.target);
  };

  const getRating = e => {
    setRating(e.target.value);
  };

  return (
    <PageContainer>
      <Content>
        <ReviewInfo>
          <FormControl>
            <FormLabel id='demo-radio-buttons-group-label'>플랫폼</FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='Mega'
              name='radio-buttons-group'
            >
              <FormControlLabel value='메가스터디' control={<Radio />} label='메가스터디' />
              <FormControlLabel value='대성마이맥' control={<Radio />} label='대성마이맥' />
              <FormControlLabel value='이투스' control={<Radio />} label='이투스' />
            </RadioGroup>
          </FormControl>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={lecturerList}
            sx={{ width: 200, padding: 5 }}
            renderInput={params => <TextField {...params} label='강사명' />}
            onSelect={findLectureName}
          />
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={lectureName}
            sx={{ width: 200, padding: 5 }}
            renderInput={params => (
              <TextField {...params} label='강좌명' onSelect={getLectureName} />
            )}
          />
        </ReviewInfo>
        <InputDiv>
          <p>제목</p>
          <input
            name='subject'
            type='text'
            placeholder='여기를 눌러 작성하세요'
            onChange={onChangeTitle}
          ></input>
        </InputDiv>
        <InputDiv>
          <p>평점</p>
          <Rating precision={0.5} size='large' onClick={getRating} />
        </InputDiv>
        <InputDiv>
          <p>내용</p>
          <textarea
            name='content'
            rows='20'
            cols='60'
            placeholder='내용을 입력하세요'
            onChange={onChangeContent}
          ></textarea>
        </InputDiv>
        <Button variant='contained' onClick={addReview}>
          제출하기
        </Button>
      </Content>
    </PageContainer>
  );
};

const Content = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffffdd;
  height: inherit;
`;

const InputDiv = styled.div`
  display: flex;
  p {
    width: 100px;
    padding-top: 20px;
    margin-left: 0in;
  }
  input {
    width: 250px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
  }
  textarea {
    resize: none;
    border: none;
    margin-top: 20px;
  }
`;

const ReviewInfo = styled.div`
  display: flex;
  padding: 10px;
  p {
    padding: 50px;
  }
`;

export default Write;
