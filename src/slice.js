import { createSlice } from '@reduxjs/toolkit';

// import { fetchRegions } from './services/api';

const initialState = {
  search: '',
  post: '',
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
      id: '37f234a3081e4b898b0ad79ca2aeb7af',
      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['CS', '아무거나'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      id: '37f234a3081e4b898b0ad79ca2aeb7af',

      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['http', 'love'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      id: '37f234a3081e4b898b0ad79ca2aeb7af',

      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['아무거나'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      id: '37f234a3081e4b898b0ad79ca2aeb7af',

      title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
      writer: '허니몬',
      date: '2022-04-10',
      tags: ['호우', '잘생김'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
  ],
  // 다 받아온 posts
  posts: [],

  // 공개하는 포스트들은 일단 여기 담아두자
  postsID: [
    '37f234a3081e4b898b0ad79ca2aeb7af',
    '060753dff10a4a2ab9df5e940a81c84a',
    '72751ae7a3124d6a865743202dcdbad1',
    'this-495aaded184344c9ba60df3f42f8f22d',
    '44ff251f82a24300b3179b3add46ac4d',
  ],
};

const reducers = {
  setPost: (state, { payload: post }) => ({ ...state, post }),
  setPosts: (state, { payload: posts }) => ({ ...state, posts }),
  changeSearchInput: (state, { payload: text }) => ({ ...state, search: text }),
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export const { setPost, setPosts, changeSearchInput } = actions;

export default reducer;

export function getPosts() {
  return async (dispatch, getState) => {
    const { postsID } = getState();

    const responses = await Promise.all(
      postsID.map((NOTION_PAGE_ID) =>
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`).then(
          (res) => res.json()
        )
      )
    );

    dispatch(setPosts(responses));
  };
}

export function loadPost(NOTION_PAGE_ID) {
  return async (dispatch) => {
    const response = await fetch(
      `https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`
    );
    const post = await response.json();

    dispatch(setPost(post));
  };
}
