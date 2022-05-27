import { Link } from 'react-router-dom';

export default function MainDoor() {
  return (
    <>
      <div>
        <span>작업과 기록의 블로그</span>
        <h1>
          안녕하세요! <br />
          프론트엔드 개발자 <br />
          <strong style={{ color: '#8d99ff' }}>홍원배</strong>입니다
        </h1>
        <p>제가 공부한 내용을 정리하여 공유하는 블로그입니다</p>

        <button type="button">
          <Link to="/me">About Me</Link>
        </button>
      </div>

      <div>
        <a href="https://github.com/shongs27" target="_blank" title="깃허브">
          <img
            src="https://avatars.githubusercontent.com/u/55541745?v=4"
            alt="릭앤모티 모티"
            width="380px"
            height="380px"
          />
        </a>
      </div>
    </>
  );
}
