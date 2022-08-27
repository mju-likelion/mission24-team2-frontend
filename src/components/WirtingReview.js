import styled from '@emotion/styled';
import {
  Container,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Autocomplete,
  TextField,
  Rating,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = 'https://localhost:3000';

const WritingReview = () => {
  const [lecturer, setLecturere] = useState([]);
  const lectureName = ['어쩌구 명', '어쩌명'];

  return (
    <ReviewContainer>
      <ReviewInfo>
        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>플랫폼</FormLabel>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='Mega'
            name='radio-buttons-group'
          >
            <FormControlLabel value='Mega' control={<Radio />} label='메가스터디' />
            <FormControlLabel value='Daesung' control={<Radio />} label='대성마이맥' />
            <FormControlLabel value='Etoos' control={<Radio />} label='이투스' />
          </RadioGroup>
        </FormControl>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={lecturer}
          sx={{ width: 200, padding: 5 }}
          renderInput={params => <TextField {...params} label='강사명' />}
        />
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={lectureName}
          sx={{ width: 200, padding: 5 }}
          renderInput={params => <TextField {...params} label='강좌명' />}
        />
      </ReviewInfo>
      <InputDiv>
        <p>제목</p>
        <input type='text' placeholder='여기를 눌러 작성하세요'></input>
      </InputDiv>
      <InputDiv>
        <p>작성자</p>
        <input type='text' placeholder='여기를 눌러 작성하세요'></input>
      </InputDiv>
      <InputDiv>
        <p>평점</p>
        <Rating precision={0.5} size='large' />
      </InputDiv>
      <InputDiv>
        <p>내용</p>
        <textarea rows='20' cols='60' placeholder='내용을 입력하세요'></textarea>
      </InputDiv>
    </ReviewContainer>
  );
};

const ReviewContainer = styled(Container)`
  background-color: white;
  width: 1000px;
  height: 700px;
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

export default WritingReview;
