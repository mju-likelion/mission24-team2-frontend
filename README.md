# 경기남부 해커톤 Mission24 Team2 Front-End

## How to start

```
// 패키지 매니저는 yarn을 사용합니다

.env 파일 설정
REACT_APP_API = 추후 추가 예정

// 필수 패키지 설치
yarn install

// 프로젝트 시작
yarn start
```

## Convention

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

## Tech Stack

- React.js
- react-router-dom
- Axios
- MUI ([Guid](https://mui.com/material-ui/react-autocomplete/))
- Recoil ([Guid](https://recoiljs.org/ko/docs/introduction/installation))
