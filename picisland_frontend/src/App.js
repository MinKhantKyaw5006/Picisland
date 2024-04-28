

// App.jsx
// App.js
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import { FetchUser } from './utils/FetchUser';

const App = () => {
  const navigate = useNavigate();
  useEffect (()=>{
    const user =FetchUser();  
    if(!user) navigate('/login');
  },[])
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;

