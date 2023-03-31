import './App.scss';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import NoPage from './components/NoPage/NoPage';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Main>
          <Sidebar />
          <Routes>
              <Route exact path='/' element={< Profile />}></Route>
              <Route path='/messages'>
                <Route index element={< Messages />}></Route>
                <Route path=':id' element={< Messages />}></Route>
              </Route>
              <Route path='/news' element={< News />}></Route>
              <Route path='/music' element={< Music />}></Route>
              <Route exact path='/settings' element={< Settings />}></Route>
              <Route path="*" element={< NoPage />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

export default App;
