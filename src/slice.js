import { createSlice } from '@reduxjs/toolkit';

// import { fetchRegions } from './services/api';

const initialState = {
  contactForm: {
    name: '',
    email: '',
    message: '',
  },
  search: '',
  // 3. PostDetail
  post: '',
  postTags: [],
  // 2. TagPosts에서 쓰임 [미구현]
  // ?notion에서 API를 보내 따로 받아와서 pagePosts에 저장
  // pagePosts-> pageTags와 pageTotalTags도 비동기 함수로 클라이언트에서 만듦
  pageTotalTags: 8,
  pageTags: [
    { tag: 'Javascript', count: 4 },
    { tag: '브라우저', count: 3 },
    { tag: 'CS', count: 1 },
  ],
  pagePosts: [
    {
      id: '37f234a3081e4b898b0ad79ca2aeb7af',
      title: '브라우저의 렌더링 과정',
      writer: '홍원배',
      date: '2022-05-28',
      tags: ['브라우저', 'Javascript'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      id: '060753dff10a4a2ab9df5e940a81c84a',

      title: '호이스팅',
      writer: '홍원배',
      date: '2022-05-28',
      tags: ['Javascript'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      id: '72751ae7a3124d6a865743202dcdbad1',

      title: '클로저',
      writer: '홍원배',
      date: '2022-05-29',
      tags: ['Javascript'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      id: 'this-495aaded184344c9ba60df3f42f8f22d',

      title: 'this, 브라우저 저장소',
      writer: '홍원배',
      date: '2022-05-29',
      tags: ['브라우저', 'Javascript'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
    {
      id: '44ff251f82a24300b3179b3add46ac4d',

      title: '싱글스레드와 이벤트루프',
      writer: '홍원배',
      date: '2022-05-29',
      tags: ['CS', '브라우저'],
      contents:
        '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
    },
  ],
  // 1. postsID에 맞추어 posts에 다 받아오기
  posts: [],
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
  setPostTags: (state, { payload: postTags }) => ({ ...state, postTags }),
  setPosts: (state, { payload: posts }) => ({ ...state, posts }),
  changeSearchInput: (state, { payload: text }) => ({ ...state, search: text }),
  changeContactForm: (state, { payload: { name, value } }) => ({
    ...state,
    contactForm: {
      ...state.contactForm,
      [name]: value,
    },
  }),
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export const {
  setPost,
  setPostTags,
  setPosts,
  changeSearchInput,
  setContactForm,
  changeContactForm,
} = actions;

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
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`
    );
    const post = await response.json();

    dispatch(setPost(post));

    const { pagePosts } = getState();
    const { tags } = pagePosts.find(({ id }) => id === NOTION_PAGE_ID);
    dispatch(setPostTags(tags));
  };
}
