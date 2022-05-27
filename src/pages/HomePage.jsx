import styles from './HomePage.module.scss';

import MainDoor from '../components/MainDoor';
import { homeIntro } from '../fixture/posts';
import TagPosts from '../commons/TagPosts';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const pageTags = useSelector((state) => state.pageTags);
  const pagePosts = useSelector((state) => state.pagePosts);

  return (
    <div className={styles.container}>
      {/* Maindoor를 Layout Main에서 분리시킬까 */}
      <MainDoor />
      <div className={styles.line} />

      <TagPosts intro={homeIntro} tags={pageTags} posts={pagePosts} />

      <div className="pageNation">
        페이지 네이션 구분
        <p>&lt;&lt; 1 2 3 4 5 6 7 &gt; &gt;</p>
      </div>
    </div>
  );
}