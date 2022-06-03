import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import styles from './tagPosts.module.scss';

// {
//   title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
//   writer: '허니몬',
//   date: '2022-04-10',
//   tags: ['CS', '아무거나'],
//   contents:
//     '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
// },

export default function TagPosts() {
  const { tag = 'BLOG' } = useParams();

  const pagePosts = useSelector((state) => state.pagePosts);
  const pageTags = useSelector((state) => state.pageTags);
  const pageTotalTags = useSelector((state) => state.pageTotalTags);

  const [page, setPage] = useState(1);
  const PER_PAGE_COUNT = 6;
  const offset = (page - 1) * PER_PAGE_COUNT;
  const totalPage = Math.ceil(pagePosts.length / PER_PAGE_COUNT);

  function handlePrevPage() {
    setPage((page) => page - 1);
  }

  function handleNextPage() {
    setPage((page) => page + 1);
  }

  function handlePage(page) {
    setPage(page);
  }

  if (!pagePosts.length) {
    return <div>해당 포스팅이 없습니다</div>;
  }

  return (
    <div className={styles.tagPosts}>
      <h1>
        <span className={styles.title}>{tag}</span>
        <span className={styles.titleCount}>{pageTotalTags}</span>
      </h1>

      {/* <p>{intro.intro}</p> */}
      <ul className={styles.category}>
        {pageTags.map(({ tag, count }) => (
          <li>{`${tag}(${count})`}</li>
        ))}
      </ul>

      <ul className={styles.postList}>
        {pagePosts
          .slice(offset, offset + PER_PAGE_COUNT)
          .map(({ id, title, writer, date, tags, contents }) => (
            <li>
              <Link to={`/posts/${id}`}>
                <img
                  src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
                  alt="공사중"
                />
                <h2>{title}</h2>
                <p className={styles.postMeta}>
                  <span>{writer}</span>
                  <span> | </span> <span>{date}</span>
                  {/* <span>tags[0]</span> */}
                </p>
                <p className={styles.postContents}>{contents}</p>
              </Link>
            </li>
          ))}
      </ul>

      <div className={styles.pageNation}>
        <button type="button" onClick={handlePrevPage} disabled={page === 1}>
          &lt;
        </button>

        {Array(totalPage)
          .fill()
          .map((_, i) => (
            <button type="button" onClick={() => handlePage(i + 1)}>
              {i + 1}
            </button>
          ))}

        <button
          type="button"
          onClick={handleNextPage}
          disabled={page === totalPage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
