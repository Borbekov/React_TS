import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Chats from './pages/Chats/Chats';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

function App({ store }) {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="body">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route
                path='/profile'
                element={
                  <Profile />
                }
              />
              <Route
                path='/messages'
                element={
                  <Chats store={store} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
