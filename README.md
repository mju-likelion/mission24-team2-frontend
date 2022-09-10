# 경기남부 해커톤 Mission24 SpotLight Front-End ([🔗 Server](https://github.com/mju-likelion/mission24-team2-backend))

경기남부 해커톤은 명지대학교, 을지대, 한국외대 글로벌캠퍼스. 한양대 ERICA 총 네 학교가 모여 진행한 해커톤입니다.

```
경기남부 해커톤

개발 기간: 22년 8월 27일 20시 ~ 22년 8월 28일 08시 (12시간)
개발 인원: 총 5명 (FE 4명, BE 1명)
```

## ✨ Demo
### SpotLight란?
```
SpotLight는 고등학생을 대상으로 한 인터넷 강의 수강평을 찾아볼 수 있는 사이트입니다,

우리는 인터넷 강의를 구매하기 전 해당 강사와 강의 평가를 찾아봅니다.
하지만, 흩어져 있는 리뷰를 보기 위해 해당 학원 사이트에 일일이 방문해야 하는 불편함이 있었습니다.

이런 불편함을 느낀 우리는 모든 학원의 리뷰를 모아서 제공하면 편하지 않을까? 하는 생각을 하게 됐고, SpotLight가 탄생하게 됐습니다.

각 학원들의 강의평을 한눈에 보기 쉽게 제공해 학생들의 선택의 폭을 넓히는 것이 우리의 목표입니다.

```

### 시작화면
<img width="1487" alt="시작화면" src="https://user-images.githubusercontent.com/63037629/188209448-f30d7b23-75b4-4a89-988e-7e5d3d3d9d76.png">

```
첫 시작 화면입니다. 시작 버튼을 눌러 게시물 목록을 볼 수 있습니다.

만약, 로그인이 안 됐다면 로그인 화면으로 전환됩니다.
```

## 로그인
<img width="1680" alt="로그인" src="https://user-images.githubusercontent.com/63037629/188209830-d8233071-0343-4ad8-a8d1-6c61aca3d004.png">

```
로그인 시 서버에 저장된 회원과 정보가 일치할 경우 응답과 함께 JWT 토큰을 받습니다.

JWT 토큰은 로컬 스토리지에 저장, 관리됩니다.
```

## 회원가입
![회원가입](https://user-images.githubusercontent.com/63037629/188210020-f463ad15-89b6-4c16-8404-622cfead4476.gif)


```
모든 입력은 유효성 검증을 실행합니다.

만약 하나라도 유효성 검증에 실패할 시 가입 버튼이 비활성화되며 각 에러에 맞는 에러 문구를 출력합니다.
```

## 글 목록
![게시물 리스트](https://user-images.githubusercontent.com/63037629/188210222-a2c32afc-a2d3-4cf7-88a2-b3fbda3e212c.gif)


```
작성된 리뷰들을 한눈에 볼 수 있는 공간입니다. 왼쪽 버튼을 통해 과목별로 필터링이 가능합니다.
```

## 글 등록
![게시물 등록](https://user-images.githubusercontent.com/63037629/188210710-d25599b3-1119-4309-943a-348352de39bc.gif)

```
글 등록의 경우 플랫폼을 누르면 해당 플랫폼의 강사를 선택 가능합니다. 강사를 클릭하면 해당 강사의 강의 목록을 선택할 수 있습니다.

빠른 검색을 위해 강사, 강의의 경우 자동완성 기능을 이용했습니다.

이외에도 제목, 본문을 입력할 수 있고 별점을 마우스를 통해 인터랙티브 하게 조작할 수 있습니다.
```

## 리뷰 열람
<img width="1668" alt="게시물 상세" src="https://user-images.githubusercontent.com/63037629/188210881-090ac4ec-26a9-4386-99db-1fc47c61cd62.png">

```
상세 리뷰를 확인할 수 있습니다.

익명성 보장을 위해 닉네임의 경우 앞 두 글자만 보여주고 그 이후는 '*'로 대체합니다.
```

## 🔒 How to start

```
// 패키지 매니저는 yarn을 사용합니다

.env 파일 설정
REACT_APP_API = http://localhost:5000

// 필수 패키지 설치 (처음 실행 시)
yarn install

// 프로젝트 시작
yarn start
```

## ⚖ Convention

#### 커밋 컨벤션

예시) `feat: todo 등록 구현`

| 머릿말   | 설명                               |
| -------- | ---------------------------------- |
| feat     | 기능 구현                          |
| setting  | 패키지 설치, 개발 설정             |
| refactor | 기능변화 없이 최적화, 코드 개선 등 |
| fix      | 버그 수정                          |
| style    | 스타일링, 변수명 수정              |
| docs     | README.md 작성,주석 추가           |

#### 브랜치 네이밍 컨벤션

예시) `feature/signIn`

모든 feature는 develop에서 분기합니다

| 머릿말  | 설명                        |
| ------- | --------------------------- |
| master  | 최종 결과                   |
| develop | 기능 구현                   |
| feature | 기능 단위 구현              |
| fix     | master에서 발견된 버그 수정 |

## 🛠 Tech Stack

- React.js
- react-router-dom
- Axios
- MUI ([Guid](https://mui.com/material-ui/react-autocomplete/))
- Recoil ([Guid](https://recoiljs.org/ko/docs/introduction/installation))

## 👩‍👦‍👦 Team
- 김민규 (Back-End)
- 박은서 (Front-End)
  - 기획 및 전체 UI 디자인
  - 수강평 조회 컴포넌트 개발
- 배한조 (Front-End)
  - 공통 컴포넌트 UI 제작
  - 게시물 목록 및 자세히 보기 데이터 패치 로직 개발
  - 로그인, 회원가입 로직 개발
  - 리뷰 목록 필터링 로직 개발
- 윤혜민 (Front-End)
- 조민지 (Front-End)
