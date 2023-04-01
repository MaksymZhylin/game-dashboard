import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Flex from './styles/Flex';
import LeftSidebar from './components/LeftSidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import schema from './schema';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isRegisteredIn, setisRegisteredIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const session = JSON.parse(sessionStorage.getItem('session'));
    user ? setisRegisteredIn(true) : setisRegisteredIn(false);
    session ? setIsLoggedIn(true) : setIsLoggedIn(false);
    if (user && user.name) {
      setUsername(user.name);
    }
  }, []);

  const handleRegister = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    sessionStorage.setItem('session', JSON.stringify(data));
    setUsername(JSON.parse(localStorage.getItem('user')).name);
    setisRegisteredIn(true);
    setIsLoggedIn(true);
    console.log('Hello!');
  };

  const handleLogin = (data) => {
    sessionStorage.setItem('session', JSON.stringify(data));
    const userSession = JSON.parse(sessionStorage.getItem('session'));
    const userOther = JSON.parse(localStorage.getItem('user'));
    if (
      userSession.email === userOther.email &&
      userSession.password === userOther.password
    ) {
      setUsername(userOther.name);
      setisRegisteredIn(true);
      setIsLoggedIn(true);
      console.log('Hello!');
    } else {
      console.log('Your email or password is wrong!');
    }
  };

  return (
    <Router>
      {isRegisteredIn && isLoggedIn ? (
        <Flex
          width='100vw'
          height='calc(var(--vh, 1vh)*100)'
          overflowX='hidden'
          minWidth='1250px'
          background='#111216'
        >
          <LeftSidebar />
          <Flex
            flexDirection='column'
            flexGrow={1}
            gap='24px'
            overflow='hidden'
          >
            <Header username={username} />
            <Routes>
              <Route path='/login' element={<Navigate to='/' />} />
              <Route path='/register' element={<Navigate to='/' />} />
              <Route exact path='/' element={<Dashboard />} />
            </Routes>
          </Flex>
        </Flex>
      ) : (
        <Flex
          width='100vw'
          height='calc(var(--vh, 1vh)*100)'
          background='#242731'
          flexDirection='column'
          alignItems='center'
        >
          <Routes>
            <Route
              path='/login'
              element={
                <Login
                  handleSubmit={handleSubmit(handleLogin)}
                  register={register}
                  errors={errors}
                />
              }
            />
            <Route
              path='/register'
              element={
                <Register
                  handleSubmit={handleSubmit(handleRegister)}
                  register={register}
                  errors={errors}
                />
              }
            />
            <Route path='/*' element={<Navigate to='/login' replace />} />
          </Routes>
        </Flex>
      )}
    </Router>
  );
}

export default App;
