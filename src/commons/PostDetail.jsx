import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
import { NotionRenderer } from 'react-notion';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPost } from '../slice';
import { Link, useParams } from 'react-router-dom';

export default function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadPost(id));
  }, [id]);

  return (
    <>
      <NotionRenderer blockMap={post} fullPage={true} hideHeader={true} />
    </>
  );
}
