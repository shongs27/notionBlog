import { createSlice } from '@reduxjs/toolkit';

// import { fetchRegions } from './services/api';

const initialState = {
  // pageTags에서 count 더한거
  pageTotalTags: 10,
  // TagPosts를 구성하는 Tags // pageTags에서 가공해서 가져옴
  pageTags: [
    { tag: 'javascript', count: 2 },
    { tag: 'node.js', count: 4 },
    { tag: 'http', count: 4 },
  ],
  // TagPosts를 구성하는 posts // posts에서 잘라서 가져온다
  pagePosts: [
    {
      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['CS', '아무거나'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['http', 'love'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['아무거나'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['호우', '잘생김'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
  ],

  // 다 받아온 posts
  posts: [
    {
      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['CS', '아무거나'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['http', 'love'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['아무거나'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['호우', '잘생김'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
  ],
};

const reducers = {
  setRegions: (state, { payload: regions }) => ({ ...state, regions }),
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export const {} = actions;

export default reducer;
