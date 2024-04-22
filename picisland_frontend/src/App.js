

// App.jsx
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';


const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </AuthContextProvider>
    </div>

    
  );
};

export default App;
