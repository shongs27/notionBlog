# 🚀 배포

[GithubPage](https://shongs27.github.io/notionBlog/)

# 📝 기술 스택

- React
- Redux-toolkit
- SCSS

## 폴더 구조

```sh
src
│
├─ components  # 컴포넌트를 모아놓은 폴더
├─ commons # 공통적으로 이용되어지는 컴포넌트
│
├─ assets  # 이미지 파일(svg)을 모아놓은 폴더
└─ styles  # CSS 스타일 기본 설정

```

# 📌 실행 방법

## 1. 설치

```
git clone https://github.com/shongs27/notionBlog.git
```

```
npm install
```

## 2. Post정보 확인

<img src="https://user-images.githubusercontent.com/55541745/171997280-d65caeaf-68f7-4183-be8d-dacaf86e5e6e.gif" width="400">

# 💡 구현 내용

## 1. notion API

notion API를 활용해서 [notion](www.naver.com) 메모 소프트웨어 프로그램에서 정리된 내용을 받아와서 구성하여 1차적으로 백엔드 서버 없이 구현했습니다

## 2. 심플하고 깔끔한 디자인 지향

읽는 내용이 많은 블로그 이므로 깔끔한 이미지를 주기 위한 색깔과 애니메이션을 적용했습니다

# ✏️ 어려웠던 점

## 1. 노션의 API를 가져와서 원하는 데이터로 가공

- SSR을 지원하지 않고 CSR로 노션API의 부분적인 가공이 힘들었기 때문에 redux에 임시적으로 데이터를 저장하는 식으로 구현했습니다.

- 좋아요, 검색 기능 등을 지원하기 위해 백엔드 서버를 구현 예정이며 직접 운영하며 다양한 프로젝트를 적용할 예정입니다

## 2. 디자인

다양한 디자인을 보고 배우라는 조언대로 여러 디자인을 참고하며 만들었습니다. 하지만 무엇을 바꿔야 하는지의 명확한 해결점이 보이지 않아 이것저것 수정했던것 같습니다.

# 🏈 보완할 점

- notionAPI에 대해 좀 더 집중적으로 공부해 볼 생각입니다  
  markdown 렌더링을 위한 mast, hast등의 AST  
  notion의 부분적인 데이터 fetch 방법
- 백엔드 서버 구현  
  좋아요, 검색 기능을 지원
