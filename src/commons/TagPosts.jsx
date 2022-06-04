import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setCurrentPage } from '../slice';
import PageNation from './PageNation';

import styles from './tagPosts.module.scss';

export default function TagPosts() {
  const tag = useParams().tag?.toUpperCase() || 'BLOG';

  const dispatch = useDispatch();
  const pagePosts = useSelector((state) => state.pagePosts);
  const pageTags = useSelector((state) => state.pageTags);
  const pageTotalTags = useSelector((state) => state.pageTotalTags);

  const page = useSelector((state) => state.currentPage);
  const PER_PAGE_COUNT = 6;
  const offset = (page - 1) * PER_PAGE_COUNT;
  const totalPage = Math.ceil(pagePosts.length / PER_PAGE_COUNT);

  function handlePage(currentPage) {
    const pageType = {
      prev: dispatch(setCurrentPage(page - 1)),
      next: dispatch(setCurrentPage(page + 1)),
    };

    dispatch(pageType[currentPage] || setCurrentPage(Number(currentPage)));
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
          <li>
            <Link to={`/${tag}`}>{`${tag}(${count})`}</Link>
          </li>
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

      <div className={styles.pageNationContainer}>
        <PageNation page={page} totalPage={totalPage} handlePage={handlePage} />
      </div>
    </div>
  );
}
