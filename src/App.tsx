import React from 'react';
import './App.css';
import UserLoginForm from './components/UserLoginForm/UserLoginForm';

function App() {
  return (
    <div className="App">
      <div className="Grid">
        <div className="FormWrapper">
          <UserLoginForm></UserLoginForm>
        </div>
      </div>

    </div>
  );
}

export default App;