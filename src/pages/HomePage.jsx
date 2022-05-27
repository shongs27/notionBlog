import styles from './HomePage.module.scss';

import MainDoor from '../components/MainDoor';
import { homeIntro } from '../fixture/posts';
import TagPosts from '../commons/TagPosts';

export default function HomePage() {
  const postsTags = [
    { tag: 'javascript', count: 2 },
    { tag: 'node.js', count: 4 },
    { tag: 'http', count: 4 },
  ];
  const posts = [
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
  ];
  return (
    <div className={styles.container}>
      {/* Maindoor를 Layout Main에서 분리시킬까 */}
      <MainDoor />
      <div className={styles.line} />

      <TagPosts intro={homeIntro} tags={postsTags} posts={posts} />
    </div>
  );
}
