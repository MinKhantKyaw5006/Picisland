
// Home.jsx
// import React from 'react'
// import { useState,useRef,useEffect } from 'react';
// import {HiMenu} from 'react-icons/hi';
// import { AiFillClockCircle } from 'react-icons/ai';
// import { useAuth } from '../context/AuthContext';
// import {Link, Route, Routes, json} from 'react-router-dom';
// import { Sidebar,UserProfile } from '../components';
// import { client } from '../client';
// import logo from '../assets/logo.png';
// import Pins from './Pins';
// import { userQuery } from '../utils/data';

// const Home = () => {
//   const [toggleSidebar, settoggleSidebar] = useState(false);
//   const [user, setUser] = useState(null);
//   const userInfo = localStorage.getItem('user') != 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

//   //get user info from sanity
//   useEffect(() => {
//     const query = userQuery(userInfo?.uid);
//     client.fetch(query)
//     .then((data) =>{
//       setUser(data[0]);
//     })
//   },[]);

//   const { logOut } = useAuth();

//   const handleLogout = async () => {
//     try {
//       await logOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (  
//     <div>
//       <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
//         <div className='hidden md:flex h-screen flex-initial'>
//           <Sidebar/>
//         </div>

//         <div className='flex md:hidden flex-row'>
//           <HiMenu fontSize={40} className='cursor-pointer' onClick={()=> settoggleSidebar}/>
//           <Link to ='/'>
//             <img src={logo} alt='logo' className='w-28'/>
//           </Link>
//           <Link to ={'user-profile/${user?._id}'}>
//             <img src={user?.image} alt='logo' className='w-28'/>
//           </Link>
//         </div>
       
//       </div>
//       <div>
//        <button onClick={handleLogout}>Logoout</button>
//       </div>
//     </div>
   
    
//   )
// }

// export default Home


// import React, { useState, useEffect ,useRef} from 'react';
// import { HiMenu } from 'react-icons/hi';
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { Link, Route, Routes } from 'react-router-dom';
// import { Sidebar, UserProfile } from '../components';
// import { client } from '../client';
// import logo from '../assets/logo.png';
// import { userQuery } from '../utils/data';
// import { useAuth } from '../context/AuthContext';
// import Pins from './Pins';
// import { FetchUser } from '../utils/FetchUser';

// const Home = () => {
//   //console.log('Home component rendered'); // Add this line to check if the component is rendered twice
//   const [toggleSidebar, setToggleSidebar] = useState(false);
//   const [user, setUser] = useState(null);
//   const scrollRef = useRef(null);
//   const userInfo = FetchUser();
  

//   // Get user info from Sanity
//   useEffect(() => {
//     //console.log('useEffect hook triggered'); // Add this line for debugging
//     if (userInfo && userInfo.uid) {
//       const query = userQuery(userInfo.uid);
//       client.fetch(query)
//         .then((data) => {
//           if (data && data.length > 0) {
//             setUser(data[0]);
//             //console.log('User data from Sanity:', data[0]); // Log user data to the console
//           } else {
//             console.error('User data from Sanity is empty or null');
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching user data from Sanity:', error);
//         });
//     }
//   }, [userInfo.uid]); // Add userInfo.uid as a dependency
  
  
//   useEffect(()=>{
//    scrollRef.current.scrollTo(0,0)
//   },[])

  

  

//   const { logOut } = useAuth();

//   const handleLogout = async () => {
//     try {
//       await logOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (  
//     <div>
//       <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
//         <div className='hidden md:flex h-screen flex-initial'>
//           <Sidebar user= {user && user}/>
//         </div>
  
//         <div className='flex md:hidden flex-row shadow-md'> {/* Apply shadow to this outermost div */}
//           <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>

//             <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(true)} />
//             <Link to='/'>
//               <img src={logo} alt='logo' className='w-28' />
//             </Link>
//             {user && (
//               <Link to={`/user-profile/${user._id}`}>
//                 <img src={user.image} alt='logo' className='w-28' />
//               </Link>
//             )}
//           </div>

//           {/* Render Sidebar component when toggleSidebar is true */}
//           {toggleSidebar && (
//             <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
//               <div className='absolute w-full flex justify-end items-center p-2'>
//                 <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={()=> setToggleSidebar(false)}/>
//               </div>
//               <Sidebar user= {user && user} closeToggle ={setToggleSidebar}/>
//             </div>
//           )}
//         </div>
  
//         <div className='pb-8 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
//           <Routes>
//             <Route path='/user-profile/:userId' element={<UserProfile/>}/>
//             <Route path='/*' element={<Pins user={user && user}/>}/>
//           </Routes>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect, useRef } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';
import { Sidebar, UserProfile } from '../components';
import { client } from '../client';
import logo from '../assets/logo.png';
import { userQuery } from '../utils/data';
import { useAuth } from '../context/AuthContext';
import Pins from './Pins';
import { FetchUser } from '../utils/FetchUser';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);
  const userInfo = FetchUser();

  // Get user info from Sanity
  useEffect(() => {
    if (userInfo && userInfo.uid) {
      const query = userQuery(userInfo.uid);
      client
        .fetch(query)
        .then((data) => {
          if (data && data.length > 0) {
            setUser(data[0]);
          } else {
            console.error('User data from Sanity is empty or null');
          }
        })
        .catch((error) => {
          console.error('Error fetching user data from Sanity:', error);
        });
    } else {
      console.error('User info is null or undefined');
    }
  }, [userInfo]);
  
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  const { logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
        <div className='hidden md:flex h-screen flex-initial'>
          <Sidebar user={user && user} />
        </div>

        <div className='flex md:hidden flex-row shadow-md'>
          <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
            <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(true)} />
            <Link to='/'>
              <img src={logo} alt='logo' className='w-28' />
            </Link>
            {user && (
              <Link to={`/user-profile/${user._id}`}>
                <img src={user.image} alt='logo' className='w-28' />
              </Link>
            )}
          </div>

          {toggleSidebar && (
            <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
              <div className='absolute w-full flex justify-end items-center p-2'>
                <AiFillCloseCircle fontSize={30} className='cursor-pointer' onClick={() => setToggleSidebar(false)} />
              </div>
              <Sidebar user={user && user} closeToggle={setToggleSidebar} />
            </div>
          )}
        </div>

        <div className='pb-8 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
          <Routes>
            <Route path='/user-profile/:userId' element={<UserProfile />} />
            <Route path='/*' element={<Pins user={user && user} />} />
          </Routes>
        </div>
      </div>

  
    </div>
  );
};

export default Home;
