import logo from './assets/images/meetroom.png';
import cover from './assets/images/cover.jpg';
import avatar from './assets/images/avatar.jpg';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className="header-logo" src={logo} alt='logo'/>
      </header>
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="sidebar-nav__list">
            <li><a href={'/'}>Profile</a></li>
            <li><a href={'/'}>Messages</a></li>
            <li><a href={'/'}>News</a></li>
            <li><a href={'/'}>Music</a></li>
            <li><a href={'/'}>Settings</a></li>
          </ul>
        </nav>
      </div>
      <main className="main">
        <img className="main-cover" src={cover} alt='cover'/>
        <div className="profile">
          <img className="profile-avatar" src={avatar} alt='avatar'/>
        </div>
      </main>
    </div>
  );
}

export default App;
