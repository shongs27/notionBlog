import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import FooterBar from './FooterBar';
import MainDoor from '../components/MainDoor';

import styles from './layout.module.scss';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className={styles.layout}>
      <header>
        <Nav />
      </header>

      <main className={styles.main}>
        {pathname === '/' && (
          <div className={styles.otherColor}>
            <div className={styles.pageIntro}>
              <MainDoor />
            </div>
          </div>
        )}

        <div className={styles.pageMain}>
          <Outlet />
        </div>
      </main>

      <footer>
        <FooterBar />
      </footer>
    </div>
  );
}
