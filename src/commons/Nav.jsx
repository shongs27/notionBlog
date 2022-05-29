import styles from './nav.module.scss';
import { SearchIcon } from '../assets/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchInput } from '../slice';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isScroll, setIsScroll] = useState(false);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  function handleChange(e) {
    dispatch(changeSearchInput(e.currentTarget.value));
  }

  useEffect(() => {
    const debounce = () =>
      setTimeout(() => {
        window.scrollY !== 0 ? setIsScroll(true) : setIsScroll(false);
      }, 200);

    window.addEventListener('scroll', debounce);

    return () => {
      window.removeEventListener('scroll', debounce);
    };
  }, []);

  return (
    <div className={cx(styles.nav, { [styles.trans]: isScroll })}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="favicon.ico" alt="hongs blog" />
            <span>ongs Blog</span>
          </Link>
        </div>
        <div className={styles.search}>
          <form>
            <SearchIcon />
            <input type="text" value={search} onChange={handleChange} />
          </form>
        </div>
        <ul className="category">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
