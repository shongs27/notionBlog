import { Search } from '../assets/svgs';

export default function Nav() {
  return (
    <div>
      <div>
        <div className="logo">
          <img src="hong.ico" />
          Hongs Blog
        </div>
        <div className="search">
          <Search />
          <input type="text" />
        </div>
        <ul className="category">
          <li>Blog</li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
