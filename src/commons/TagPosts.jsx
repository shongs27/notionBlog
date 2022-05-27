// {
//   title: 'DNS란? (도메인 네임 시스템 개념부터 작동 방식까지',
//   writer: '허니몬',
//   date: '2022-04-10',
//   tags: ['CS', '아무거나'],
//   contents:
//     '결론 자바스크립트는 프로토타입 기반 언어이다. 프로토타입은 원형(유전자)라는 뜻이다. (객체의 원형, 즉 객체의 부모가 가지는 유전자 즉,...',
// },

export default function TagPosts({
  intro: { title, intro },
  tags = [],
  posts = [],
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{intro}</p>
      <ul>
        {tags.map(({ tag, count }) => (
          <li>{`${tag}(${count})`}</li>
        ))}
      </ul>

      <ul>
        {posts.map(({ title, writer, date, tags, contents }) => (
          <li>
            <h2>{title}</h2>
            <p>
              <span>{writer}</span>
              <span>{date}</span>
              {/* <span>tags[0]</span> */}
              <span>{contents}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}