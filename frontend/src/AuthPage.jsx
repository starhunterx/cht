import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const AuthPage = (props) => {
  const inputRef = useRef(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/authenticate', { username })
      .then((r) => props.onAuth({ ...r.data, secret: username }))
      .catch((e) => console.log('error', e));
  };

  const handleAuthorClick = () => {
    window.open('https://www.instagram.com/__.ezrael/', '_blank');
  };

  return (
    <div className="background">
      <nav className="navbar">
        <div className="navbar-brand">Interacta</div>
      </nav>
      <div className="container">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title" style={{ color: 'black' }}>
            Welcome to Interacta👋
          </div>
          <div className="form-subtitle">
            A web app for anonymous chats. Share your username to chat anonymously, but remember, your
            chats are visible to anyone with your username, so keep it clean!
          </div>
          <div className="form-subtitle">Set a username to get started</div>
          <div className="auth">
            {username.length === 0 && (
              <div className="auth-label">Username</div>
            )}
            <input
              className="auth-input"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={inputRef}
            />
            <button className="auth-button" type="submit">
              Enter
            </button>
            <button className="author-button" onClick={handleAuthorClick}>
              Contact the Developer
            </button>
          </div>
        </form>
      </div>
      <div className="copyright">© 2024 Interacta. All rights reserved.</div>
    </div>
  );
};

export default AuthPage;

// CSS Styles
const styles = `
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }

  .background {
    background-image: url('https://source.unsplash.com/random/1920x1080/?nature');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .navbar {
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
  }

  .navbar-brand {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: bold;
  }

  .container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    max-width: 400px;
    width: 100%;
  }

  .form-card {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .form-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .form-subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
    text-align: center;
  }

  .auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .auth-label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .auth-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .auth-button {
    background-color: #343a40;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 10px;
  }

  .auth-button:hover {
    background-color: #212529;
  }

  .author-button {
    background-color: transparent;
    color: #343a40;
    border: 1px solid #343a40;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .author-button:hover {
    background-color: #343a40;
    color: #fff;
  }

  .copyright {
    background-color: #000;
    color: #fff;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    .container {
      padding: 20px;
    }

    .form-card {
      padding: 20px;
    }

    .form-title {
      font-size: 20px;
    }

    .form-subtitle {
      font-size: 14px;
    }

    .auth-label {
      font-size: 12px;
    }

    .auth-input {
      padding: 8px;
    }

    .auth-button,
    .author-button {
      padding: 8px 16px;
      font-size: 14px;
    }

    .navbar-brand {
      font-size: 28px;
    }
  }
`;

// Render the styles in the head of the document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);