

// import React from 'react';
// import GoogleButton from 'react-google-button'; // Assuming you have a package for Google button
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const { googleSignIn } = useAuth();

//   const handleGoogleSignIn = async () => {
//     try {
//       await googleSignIn();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Sign in</h1>
//       <div>
//         <GoogleButton onClick={handleGoogleSignIn} />
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React from 'react';
// import GoogleButton from 'react-google-button';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Import useAuth hook
// import logo from '../assets/logowhite.png';
// import shareVideo from '../assets/share.mp4';
// import { client } from '../client';

// const Login = () => {
//   const { googleSignIn } = useAuth(); // Use the googleSignIn function from the AuthContext
//   const navigate = useNavigate(); // Use the useNavigate hook to navigate

//   const handleGoogleSignIn = async () => {
//     try {
//       // Attempt to sign in with Google
//       const userCredential = await googleSignIn();
  
//       // Check if userCredential contains a user property
//       if (userCredential && userCredential.user) {
//         // If user property exists, extract user information
//         const { user } = userCredential; // Destructure user from userCredential
//         const { displayName, email, photoURL, uid } = user;
  
//         // Store user information in localStorage
//         localStorage.setItem('user', JSON.stringify({
//           displayName,
//           email,
//           photoURL,
//           uid
//         }));

//       // Create the doc object for Sanity
//       const doc = {
//         _id: uid, // Use the user's UID as the document ID
//         _type: 'user', // Set the type to 'user'
//         username: displayName, // Set the userName field to the user's display name
//         image: photoURL // Set the image field to the user's photo URL
//       };

//       // Log the doc object for debugging (optional)
//       console.log('User document for Sanity:', doc);

//       client.createIfNotExists(doc)
//       .then(()=> {
//       // Navigate to the desired location after successful sign-in
//       navigate('/', { replace: true });
//       })

  
        
//       } else {
//         // Handle sign-in failure if userCredential or user property is missing
//         console.error('Error signing in: User information not available');
//       }
//     } catch (error) {
//       // Handle other sign-in errors
//       console.error('Error signing in:', error);
//     }
//   };
  
  

//   return (
//     <div className="flex justify-start items-center flex-col h-screen relative">
//       {/* Background video */}
//       <video
//         src={shareVideo}
//         type="video/mp4"
//         loop
//         controls={false}
//         muted
//         autoPlay
//         className="w-full h-full object-cover absolute top-0 left-0"
//       />

//       {/* Overlay */}
//       <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
//         {/* Logo */}
//         <div className="p-5">
//           <img src={logo} width="130px" alt="Logo" />
//         </div>

//         {/* Google login button */}
//         <div className="shadow-2xl">
//           <GoogleButton onClick={handleGoogleSignIn} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from 'react';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth hook
import logo from '../assets/logowhite.png';
import shareVideo from '../assets/share.mp4';
import { client } from '../client';

const Login = () => {
  const { googleSignIn } = useAuth(); // Use the googleSignIn function from the AuthContext
  const navigate = useNavigate(); // Use the useNavigate hook to navigate

  const handleGoogleSignIn = async () => {
    try {
      // Attempt to sign in with Google
      const userCredential = await googleSignIn();
  
      // Check if userCredential contains a user property
      if (userCredential && userCredential.user) {
        // If user property exists, extract user information
        const { user } = userCredential; // Destructure user from userCredential
        const { displayName, email, photoURL, uid } = user;
  
        // Store user information in localStorage
        localStorage.setItem('user', JSON.stringify({
          displayName,
          email,
          photoURL,
          uid
        }));

        // Create the doc object for Sanity
        const doc = {
          _id: uid, // Use the UID as the document ID
          _type: 'user', // Set the type to 'user'
          uid, // Store the UID in Sanity
          username: displayName, // Set the username field to the user's display name
          image: photoURL // Set the image field to the user's photo URL
        };

        // Log the doc object for debugging (optional)
        console.log('User document for Sanity:', doc);

        client.createIfNotExists(doc)
          .then(() => {
            // Navigate to the desired location after successful sign-in
            navigate('/', { replace: true });
          })
          .catch((error) => {
            console.error('Error creating user document in Sanity:', error);
          });
      } else {
        // Handle sign-in failure if userCredential or user property is missing
        console.error('Error signing in: User information not available');
      }
    } catch (error) {
      // Handle other sign-in errors
      console.error('Error signing in:', error);
    }
  };
  
  

  return (
    <div className="flex justify-start items-center flex-col h-screen relative">
      {/* Background video */}
      <video
        src={shareVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Overlay */}
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        {/* Logo */}
        <div className="p-5">
          <img src={logo} width="130px" alt="Logo" />
        </div>

        {/* Google login button */}
        <div className="shadow-2xl">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </div>
  );
};

export default Login;

