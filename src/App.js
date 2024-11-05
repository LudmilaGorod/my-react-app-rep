import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ChatWidget from './components/ChatWidget';
import Cases from './components/Cases.js';
import About from './components/About';
import Articles from './components/Articles';
import Login from './components/Login';
import { FaUserCircle } from 'react-icons/fa';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <div className="nav-links">
              <Link to="/">Кейсы</Link>
              <Link to="/articles">Статьи</Link>
            </div>
            <button onClick={toggleLogin} className="login-icon">
              <FaUserCircle size={24} />
            </button>
          </div>

          {showLogin && (
            <div className="login-popup">
              <Login />
            </div>
          )}
        </header>

        <div className="profile-info">
          <img src="/ava.png" alt="фото" className="profile-photo" />
          <h2>Привет! Я Людмила - репетитор по математике</h2>
        </div>

        <About />

        <div className="content">
          <Routes>
            <Route path="/" element={<Cases />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/case/:caseId" element={<Cases />} />
          </Routes>
        </div>

        <ChatWidget />

        {/* Footer */}
        <footer className="App-footer">
          <p>&copy; 2024 Людмила - репетитор по математике</p>
          <p>Контакты: ludmila260601@gmail.com | +77051466488</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
