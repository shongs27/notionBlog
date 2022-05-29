import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
import { NotionRenderer } from 'react-notion';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPost } from '../slice';
import { Link, useNavigate, useParams } from 'react-router-dom';

import styles from './postDetail.module.scss';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const postTags = useSelector((state) => state.postTags);

  useEffect(() => {
    dispatch(loadPost(id));
  }, [dispatch, id]);

  function handleClick(e) {
    // store에 pagePosts, pageTags, pageTotalTags를 바꿀 dispatch가 필요함
    const { tag } = e.currentTarget.dataset;
    navigate(`/${tag}`);
  }

  return (
    <>
      <NotionRenderer blockMap={post} fullPage={true} hideHeader={true} />

      <div className={styles.notionFooter}>
        {postTags.length !== 0 && (
          <ul className={styles.tags}>
            <span>태그 :</span>
            {postTags.map((tag) => (
              <li>
                <button type="button" data-tag={tag} onClick={handleClick}>
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.navigation}>
          <Link to="/">이전 게시물</Link>
          <Link className={styles.nextLink} to="/">
            다음 게시물
          </Link>
        </div>
      </div>
    </>
  );
}
