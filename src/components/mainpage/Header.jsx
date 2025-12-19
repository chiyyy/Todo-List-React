import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <h1>🏃 오늘의 운동 체크리스트</h1>
      <h1>{new Date().toLocaleDateString('sv-SE')}</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/calendar">운동 달력</Link>
        <Link to="/videos">추천 운동 영상</Link>
        <Link to='/Liked'>찜한 운동 영상</Link>
      </nav>
    </div>
  );
}

export default Header;
