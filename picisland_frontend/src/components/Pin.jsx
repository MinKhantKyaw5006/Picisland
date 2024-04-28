
// import React ,{useState} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {v4 as uuidv4} from 'uuid';
// import {MdDownloadForOffline} from 'react-icons/md';
// import {AiTwotoneDelete} from 'react-icons/ai';
// import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';
// import { urlFor,client } from '../client';
// import { FetchUser } from '../utils/FetchUser';

// const Pin = ({pin: {postedBy, image, _id, destination, save}}) => {
//     const[postHovered,setPostHovered]=useState(false);
//     const[savingPost,setSavingPost] =useState(false);
//     const navigate = useNavigate();
//     const user = FetchUser();
// //console.log(save);
//     const alreadySaved = !!save?.filter((item) => item.postedBy._id === user.uid).length;
//     const savePin =(id) => {
//         if(!alreadySaved){
//             setSavingPost(true);
//             client
//             .patch(id)
//             .setIfMissing({ save: []})
//             .insert('after','save[-1]', [{
//                 _key: uuidv4(),
//                 userId: user.uid,
//                 postedBy:{
//                     _type: 'postedBy',
//                     _ref: user.uid
//                 }
          
//             }])
//             .commit()
//             .then(()=>{
//                 window.location.reload();
//                 setSavingPost(false)
//             })
//         }
//     }


//     // 1, [2,3,1] -> [1].length -> 1 -> !1 -> false -> !false = true 
//     // 4, [2,3,1] -> [].length -> 0 -> !0 -> true -> !true - false


//   return (
//     <div className='m-2'>
//         <div 
//         onMouseEnter={()=> setPostHovered(true)}
//         onMouseLeave={()=> setPostHovered(false)}
//         onClick={()=> navigate(`/pin-detail/${_id}`)}
//         className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
//         > 
//         <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()}/>
//         {postHovered &&(
//             <div className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50'
//             style={{height: '100%'}}
//             >
//                 <div className='flex items-center justify-between'>
//                     <div className='flex gap-2'>
//                         <a
//                         href={`${image?.asset?.url}?dl=`}
//                         download
//                         onClick={(e)=>e.stopPropagation()}
//                         className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark opacity-75 hover:shadow-md outline-none'>
//                             <MdDownloadForOffline/>
//                         </a>

//                     </div>
//                     {alreadySaved ? 
//                         (
//                             <button type='button' className='bg-red-500 opacity-75 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none'>
//                                 Saved
//                             </button>
//                         ): 
//                         (
//                             <button
//                             onClick={(e)=>{
//                                 e.stopPropagation()
//                                 savePin(_id);
//                             }}
//                             type='button' 
//                             className='bg-red-500 opacity-75 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none'>
//                                 Save
//                             </button>
//                         )
//                     }
//                 </div>

//             </div>
//         )}
//         </div>
     
      
//     </div>
//   )
// }

// export default Pin


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { MdDownloadForOffline } from 'react-icons/md';
// import { AiTwotoneDelete } from 'react-icons/ai';
// import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
// import { urlFor, client } from '../client';
// import { FetchUser } from '../utils/FetchUser';

// const Pin = ({ pin: { postedBy, image, _id, destination, save } }) => {
//     const [postHovered, setPostHovered] = useState(false);
//     const [savingPost, setSavingPost] = useState(false);
//     const [alreadySaved, setAlreadySaved] = useState(false); // State to hold whether the pin is already saved
//     const navigate = useNavigate();
//     const user = FetchUser();

//     console.log('Save Prop:', save);
//     //onsole.log('User Info:', user);

//     useEffect(() => {
//         // Update the alreadySaved state when the component mounts or when the save prop changes
//         setAlreadySaved(!!save?.filter((item) => item.postedBy._id === user.uid).length);
//     }, [save, user.uid]);

//     console.log('alreadySaved:', alreadySaved); // Log the value of alreadySaved for debugging purposes

//     const savePin = (id) => {
//         if (!alreadySaved) {
//             setSavingPost(true);
//             client
//                 .patch(id)
//                 .setIfMissing({ save: [] })
//                 .insert('after', 'save[-1]', [{
//                     _key: uuidv4(),
//                     userId: user.uid,
//                     postedBy: {
//                         _type: 'postedBy',
//                         _ref: user.uid
//                     }

//                 }])
//                 .commit()
//                 .then(() => {
//                     window.location.reload();
//                     setSavingPost(false);
//                 })
//         }
//     }

//     return (
//         <div className='m-2'>
//             <div
//                 onMouseEnter={() => setPostHovered(true)}
//                 onMouseLeave={() => setPostHovered(false)}
//                 onClick={() => navigate(`/pin-detail/${_id}`)}
//                 className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
//             >
//                 <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()} />
//                 {postHovered && (
//                     <div className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50'
//                         style={{ height: '100%' }}
//                     >
//                         <div className='flex items-center justify-between'>
//                             <div className='flex gap-2'>
//                                 <a
//                                     href={`${image?.asset?.url}?dl=`}
//                                     download
//                                     onClick={(e) => e.stopPropagation()}
//                                     className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark opacity-75 hover:shadow-md outline-none'>
//                                     <MdDownloadForOffline />
//                                 </a>
//                             </div>
//                             {alreadySaved ?
//                                 (
//                                     <button type='button' className='bg-red-500 opacity-75 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none'>
//                                         Saved
//                                     </button>
//                                 ) :
//                                 (
//                                     <button
//                                         onClick={(e) => {
//                                             e.stopPropagation()
//                                             savePin(_id);
//                                         }}
//                                         type='button'
//                                         className='bg-red-500 opacity-75 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none'>
//                                         Save
//                                     </button>
//                                 )
//                             }
//                         </div>

//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Pin;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { MdDownloadForOffline } from 'react-icons/md';
// import { urlFor, client } from '../client';
// import { FetchUser } from '../utils/FetchUser';

// const Pin = ({ pin: { _id, image } }) => {
//     const [postHovered, setPostHovered] = useState(false);
//     const [alreadySaved, setAlreadySaved] = useState(false); // State to hold whether the pin is already saved
//     const [savingPost, setSavingPost] = useState(false);
//     const navigate = useNavigate();
//     const user = FetchUser();

//     useEffect(() => {
//         const fetchPinData = async () => {
//             try {
//                 const response = await client.getDocument(_id);
//                 const pinData = response;
    
//                 // Debug log to check the pin data and user ID
//                 console.log('Pin Data:', pinData);
//                 console.log('Current User ID:', user.uid);
    
//                 // Check if pinData has the save property and it's an array before using some method
//                 const alreadySaved = pinData.save && Array.isArray(pinData.save) && pinData.save.some(item => item.userId === user.uid);
    
//                 // Debug log to check the value of alreadySaved
//                 console.log('Comparison Result:', alreadySaved);
    
//                 setAlreadySaved(alreadySaved);
//             } catch (error) {
//                 // If there's an error fetching data, set alreadySaved to false
//                 console.error('Error fetching pin data:', error);
//                 setAlreadySaved(false);
//             }
//         };
    
//         fetchPinData();
//     }, []);
    

//     const savePin = (id) => {
//         if (!alreadySaved) {
//             setSavingPost(true);
//             client
//                 .patch(id)
//                 .setIfMissing({ save: [] })
//                 .insert('after', 'save[-1]', [{
//                     _key: uuidv4(),
//                     userId: user?.uid,
//                     postedBy: {
//                         _type: 'postedBy',
//                         _ref: user?.uid
//                     }
//                 }])
//                 .commit()
//                 .then(() => {
//                     // Update the alreadySaved state to true after the save operation completes
//                     setAlreadySaved(true);
//                     setSavingPost(false);
//                     // Save the state in local storage
//                     localStorage.setItem(`pin_${id}_saved`, true);
//                 })
//                 .catch((error) => {
//                     console.error('Error saving pin:', error);
//                     setSavingPost(false);
//                 });
//         }
//     };

//     return (
//         <div className='m-2'>
//             <div
//                 onMouseEnter={() => setPostHovered(true)}
//                 onMouseLeave={() => setPostHovered(false)}
//                 onClick={() => navigate(`/pin-detail/${_id}`)}
//                 className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
//             >
//                 <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()} />
//                 {postHovered && (
//                     <div className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50'
//                         style={{ height: '100%' }}
//                     >
//                         <div className='flex items-center justify-between'>
//                             <div className='flex gap-2'>
//                                 <a
//                                     href={`${image?.asset?.url}?dl=`}
//                                     download
//                                     onClick={(e) => e.stopPropagation()}
//                                     className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark opacity-75 hover:shadow-md outline-none'>
//                                     <MdDownloadForOffline />
//                                 </a>
//                             </div>
//                             {alreadySaved ?
//                                 (
//                                     <button type='button' className='bg-red-500 opacity-75 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none'>
//                                         Saved
//                                     </button>
//                                 ) :
//                                 (
//                                     <button
//                                         onClick={(e) => {
//                                             e.stopPropagation()
//                                             savePin(_id);
//                                         }}
//                                         type='button'
//                                         className='bg-red-500 opacity-75 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none'>
//                                         Save
//                                     </button>
//                                 )
//                             }
//                         </div>

//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Pin;

//latest working code
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { MdDownloadForOffline } from 'react-icons/md';
// import { urlFor, client } from '../client';
// import { FetchUser } from '../utils/FetchUser';

// const Pin = ({ pin: { _id, image } }) => {
//     const [postHovered, setPostHovered] = useState(false);
//     const [alreadySaved, setAlreadySaved] = useState(false); // State to hold whether the pin is already saved
//     //const [savingPost, setSavingPost] = useState(false);
//     const navigate = useNavigate();
//     const user = FetchUser();

//     useEffect(() => {
//         const fetchPinData = async () => {
//             try {
//                 const response = await client.getDocument(_id);
//                 const pinData = response;

//                 // Debug log to check the pin data and user ID
//                 console.log('Pin Data:', pinData);
//                 console.log('Current User ID:', user.uid);
    
//                 // Check if pinData has the save property and it's an array before using some method
//                 const alreadySaved = pinData.save && Array.isArray(pinData.save) && pinData.save.some(item => item.userId === user.uid);

//                 // Debug log to check the value of alreadySaved
//                  console.log('Comparison Result:', alreadySaved);
    
//                 setAlreadySaved(alreadySaved);
//             } catch (error) {
//                 // If there's an error fetching data, set alreadySaved to false
//                 console.error('Error fetching pin data:', error);
//                 setAlreadySaved(false);
//             }
//         };
    
//         fetchPinData();
//     }, []);

//     const savePin = (id) => {
//         if (!alreadySaved) {
//             //setSavingPost(true);
//             client
//                 .patch(id)
//                 .setIfMissing({ save: [] })
//                 .insert('after', 'save[-1]', [{
//                     _key: uuidv4(),
//                     userId: user?.uid,
//                     postedBy: {
//                         _type: 'postedBy',
//                         _ref: user?.uid
//                     }
//                 }])
//                 .commit()
//                 .then(() => {
//                     // Update the alreadySaved state to true after the save operation completes
//                     setAlreadySaved(true);
//                     //setSavingPost(false);
//                 })
//                 .catch((error) => {
//                     console.error('Error saving pin:', error);
//                     //setSavingPost(false);
//                 });
//         }
//     };

//     return (
//         <div className='m-2'>
//             <div
//                 onMouseEnter={() => setPostHovered(true)}
//                 onMouseLeave={() => setPostHovered(false)}
//                 onClick={() => navigate(`/pin-detail/${_id}`)}
//                 className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
//             >
//                 <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()} />
//                 {postHovered && (
//                     <div className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50'
//                         style={{ height: '100%' }}
//                     >
//                         <div className='flex items-center justify-between'>
//                             <div className='flex gap-2'>
//                                 <a
//                                     href={`${image?.asset?.url}?dl=`}
//                                     download
//                                     onClick={(e) => e.stopPropagation()}
//                                     className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark opacity-75 hover:shadow-md outline-none'>
//                                     <MdDownloadForOffline />
//                                 </a>
//                             </div>
//                             {alreadySaved ?
//                                 (
//                                     <button type='button' className='bg-red-500 opacity-75 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none'>
//                                         Saved
//                                     </button>
//                                 ) :
//                                 (
//                                     <button
//                                         onClick={(e) => {
//                                             e.stopPropagation()
//                                             savePin(_id);
//                                         }}
//                                         type='button'
//                                         className='bg-red-500 opacity-75 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none'>
//                                         Save
//                                     </button>
//                                 )
//                             }
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Pin;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { MdDownloadForOffline } from 'react-icons/md';
// import { urlFor, client } from '../client';
// import { FetchUser } from '../utils/FetchUser';

// const Pin = ({ pin: { _id, image, save } }) => {
//     const [postHovered, setPostHovered] = useState(false);
//     const [alreadySaved, setAlreadySaved] = useState(false); // State to hold whether the pin is already saved
//     const [totalSaves, setTotalSaves] = useState(0); // State to hold the total number of saves
//     const navigate = useNavigate();
//     const user = FetchUser();

//     useEffect(() => {
//         const fetchPinData = async () => {
//             try {
//                 const response = await client.getDocument(_id);
//                 const pinData = response;
//                 console.log('Pin Data:', pinData);
//                 console.log('Current User ID:', user.uid);

//                 const alreadySaved = pinData.save && Array.isArray(pinData.save) && pinData.save.some(item => item.userId === user.uid);

//                 setAlreadySaved(alreadySaved);
//                 console.log('Comparison Result:', alreadySaved);

//                 if (alreadySaved) {
//                     setTotalSaves(save.length);
//                 }
//             } catch (error) {
//                 console.error('Error fetching pin data:', error);
//                 setAlreadySaved(false);
//             }
//         };
    
//         fetchPinData();
//     }, []);

//     const savePin = () => {
//         if (!alreadySaved) {
//             client
//                 .patch(_id)
//                 .setIfMissing({ save: [] })
//                 .insert('after', 'save[-1]', [{
//                     _key: uuidv4(),
//                     userId: user?.uid,
//                     postedBy: {
//                         _type: 'postedBy',
//                         _ref: user?.uid
//                     }
//                 }])
//                 .commit()
//                 .then(() => {
//                     setAlreadySaved(true);
//                     setTotalSaves(prevTotalSaves => prevTotalSaves + 1);
//                 })
//                 .catch((error) => {
//                     console.error('Error saving pin:', error);
//                 });
//         }
//     };

//     return (
//         <div className='m-2'>
//             <div
//                 onMouseEnter={() => setPostHovered(true)}
//                 onMouseLeave={() => setPostHovered(false)}
//                 onClick={() => navigate(`/pin-detail/${_id}`)}
//                 className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
//             >
//                 <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()} />
//                 {postHovered && (
//                     <div className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50'
//                         style={{ height: '100%' }}
//                     >
//                         <div className='flex items-center justify-between'>
//                             <div className='flex gap-2'>
//                                 <a
//                                     href={`${image?.asset?.url}?dl=`}
//                                     download
//                                     onClick={(e) => e.stopPropagation()}
//                                     className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark opacity-75 hover:shadow-md outline-none'>
//                                     <MdDownloadForOffline />
//                                 </a>
//                             </div>
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     savePin();
//                                 }}
//                                 type='button'
//                                 className='bg-red-500 opacity-75 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none'
//                             >
//                                 {alreadySaved ? `${totalSaves} saved` : 'Save'}
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Pin;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import { client, urlFor } from '../client';

const Pin = ({ pin }) => {
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);

  const navigate = useNavigate();

  const { postedBy, image, _id, destination } = pin;

  const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  const deletePin = (id) => {
    client
      .delete(id)
      .then(() => {
        window.location.reload();
      });
  };

  let alreadySaved = pin?.save?.filter((item) => item?.postedBy?._id === user?.uid);

  alreadySaved = alreadySaved?.length > 0 ? alreadySaved : [];

  const savePin = (id) => {
    if (alreadySaved?.length === 0) {
      setSavingPost(true);

      client
        .patch(id)
        .setIfMissing({ save: [] })
        .insert('after', 'save[-1]', [{
          _key: uuidv4(),
          userId: user?.uid,
          postedBy: {
            _type: 'postedBy',
            _ref: user?.uid,
          },
        }])
        .commit()
        .then(() => {
          window.location.reload();
          setSavingPost(false);
        });
    }
  };

  return (
    <div className="m-2">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/pin-detail/${_id}`)}
        className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
          {image && (
        <img className="rounded-lg w-full " src={(urlFor(image).width(250).url())} alt="user-post" /> )}
        {postHovered && (
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: '100%' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href={`${image?.asset?.url}?dl=`}
                  download
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                ><MdDownloadForOffline />
                </a>
              </div>
              {alreadySaved?.length !== 0 ? (
                <button type="button" className="bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none">
                  {pin?.save?.length}  Saved
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    savePin(_id);
                  }}
                  type="button"
                  className="bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none"
                >
                  {pin?.save?.length}   {savingPost ? 'Saving' : 'Save'}
                </button>
              )}
            </div>
            <div className=" flex justify-between items-center gap-2 w-full">
              {destination?.slice(8).length > 0 ? (
                <a
                  href={destination}
                  target="_blank"
                  className="bg-white flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md"
                  rel="noreferrer"
                >
                  {' '}
                  <BsFillArrowUpRightCircleFill />
                  {destination?.length > 15 ?`${destination.slice(0,15)}...` : destination}
                </a>
              ) : undefined}
              {
           postedBy?._id === user?.uid && (
           <button
             type="button"
             onClick={(e) => {
               e.stopPropagation();
               deletePin(_id);
             }}
             className="bg-white p-2 rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100 outline-none"
           >
             <AiTwotoneDelete />
           </button>
           )
        }
            </div>
          </div>
        )}
      </div>
      <Link to={`/user-profile/${postedBy?._id}`} className="flex gap-2 mt-2 items-center">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={postedBy?.image}
          alt="user-profile"
        />
        <p className="font-semibold capitalize">{postedBy?.username}</p>
      </Link>
    </div>
  );
};

export default Pin;



