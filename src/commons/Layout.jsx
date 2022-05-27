import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import FooterBar from './FooterBar';

export default function Layout() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main style={{ margin: '0 200px' }}>
        <Outlet />
      </main>

      <footer>
        <FooterBar />
      </footer>
    </div>
  );
}
