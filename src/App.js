import cover from './assets/images/cover.jpg';
import avatar from './assets/images/avatar.jpg';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
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
          <div className="profile-info"></div>
        </div>
        <div className="posts">
          <div className="posts-title">My posts</div>
          <div className="posts-form">
            <form action="" className="new-post-form">
              <input type="text" className="new-post-input" placeholder='What do you want to post?' />
              <button className="new-post-send">Send</button>
            </form>
          </div>
          <div className="posts-list">
            <div className="posts-element">post</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
