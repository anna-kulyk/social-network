import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Main>
          <Sidebar />
          {/* <Profile /> */}
          <Messages />
        </Main>
      </div>
    </div>
  );
}

export default App;
