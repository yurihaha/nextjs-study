export default function Home() {
  let name = 'yuri'
  let link = 'http://google.com'
  return (
    <div>
      <h4 className="title">애플 후레시</h4>
      <h4 style={{ color: 'green', fontSize: '20px'}}>애플 후레시</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>링크</a>
    </div>
  );
}

