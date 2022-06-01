import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpIcon, ClipboardIcon, EnvelopeIcon } from '../assets/svgs';

import styles from './aboutMenu.module.scss';
import cx from 'classnames';
// import ClipboardGuide from './ClipboardGuide';

export default function AboutMenu() {
  const [hasClipboard, setHasClipboard] = useState(false);
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/contact');
    handleScroll();
  }

  function handleEmail() {
    navigator.clipboard.writeText('shongs27@gmail.com');
    setHasClipboard((prev) => !prev);

    //초기화
    setTimeout(() => {
      setHasClipboard((prev) => !prev);
    }, 2000);
  }

  function handleScroll() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.item}
          title="contact"
          onClick={handleNavigate}
        >
          <EnvelopeIcon />
        </button>
        <button
          type="button"
          className={cx(styles.item, styles.middleItem)}
          title="이메일 복사"
          onClick={handleEmail}
        >
          <ClipboardIcon />
        </button>
        <button
          type="button"
          className={styles.item}
          title="페이지 상단 이동"
          onClick={handleScroll}
        >
          <ArrowUpIcon />
        </button>
      </div>

      {hasClipboard && (
        <div
          className={cx(styles.clipboard, {
            [styles.hasClipboard]: hasClipboard,
          })}
        >
          <span>이메일이 클립보드에 복사 되었습니다</span>
        </div>
      )}
    </>
  );
}
