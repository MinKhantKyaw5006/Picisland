// import { useContext,createContext, Children, useEffect ,useState } from "react";
// import { GoogleAuthProvider , signInWithPopup, signInWithRedirect,signOut, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";

// const AuthContext = createContext()
// export const AuthContextProvider = ({children}) =>{
//     const [user, setUser] = useState({});
//     const googleSignIn  = () =>{
//         const provider = new GoogleAuthProvider ();
//         signInWithPopup(auth,provider);
//     };
//     useEffect(()=>{
//         const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
//             setUser(currentUser)
//             console.log('User',currentUser)
//         });
//         return ()=>{
//             unsubscribe();
//         }
// },[]);
//     return(
//         <AuthContext.Provider value={{googleSignIn}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const UserAuth =()=>{
//     return useContext(AuthContext)
// }


import React, { createContext, useEffect, useState, useContext } from 'react';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
 
  // // Lucus code
  // const googleSignIn = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // Handle successful sign-in
  //       setUser(result.user);
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error('Error signing in:', error);
  //     });
  // };


  // // Saw Code
  // const googleSignIn = async () => {
  //   try {
  //     const provider = new GoogleAuthProvider();
  //     const result = await signInWithPopup(auth, provider);
  //     // Handle successful sign-in
  //     setUser(result.user);
  //   } catch (error) {
  //     // Handle errors
  //     console.error('Error signing in:', error);
  //   }
  // };

  //original

  // const googleSignIn = async () => {
  //   try {
  //     const provider = new GoogleAuthProvider();
  //     //added this  line
  //     provider.setCustomParameters({ prompt: 'select_account' }); // Set custom parameter for prompt
  //     const result = await signInWithPopup(auth, provider);
  //     // Handle successful sign-in
  //     setUser(result.user);
  //   } catch (error) {
  //     // Handle errors
  //     console.error('Error signing in:', error);
  //   }
  // };

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      //Add this line  to solve cross origin block call error
      provider.setCustomParameters({ prompt: 'select_account' }); // Set custom parameter for prompt
      const result = await signInWithPopup(auth, provider);
      // Ensure the userCredential object is returned
      return result; // Return the userCredential object
    } catch (error) {
      console.error('Error signing in:', error);
      throw error; // Throw the error to handle it in the caller
    }
  };
  
  
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //console.log('User', currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const logOut = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ googleSignIn,logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
