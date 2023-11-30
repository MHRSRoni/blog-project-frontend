import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileThunk } from '../../redux/user/userProfileSlice';

const Profile = () => {
  const dispatch = useDispatch();

  // Use an empty object as the default value for profile
  const { isLoading, profile = {}, error } = useSelector((state) => state.profile);

  useEffect(() => {
    // Dispatch the async thunk to fetch user data when the component mounts
    dispatch(getUserProfileThunk());
  }, [dispatch]);

  // Assuming you have an initialUserData object
  const initialUserData = {
    picture: '',
    name: '',
    userName: '',
    email: '',
    phone: '',
    password: '',
    interestCategory: [],
  };

  const [userData, setUserData] = useState(initialUserData);

  // Make sure userData is updated when the profile changes
  useEffect(() => {
    setUserData(profile);
  }, [profile]);

    
  return (
    <div className=" mx-auto my-auto"> 

      <div className="max-w-md mx-auto p-10 bg-white rounded-md shadow-md overflow-hidden">
    
        {isLoading}
  
        {error && <p>Error: {error}</p>}


        <div className="flex justify-center mt-8"> 
          <img
            className="mx-auto h-64 w-64 rounded-full object-cover border-4 border-white"
            src={userData.picture}
            alt="Profile"
          />
        </div>
        <div className="mt-8 text-center"> 
          <h1 className="text-4xl font-semibold">Name:{" "+userData.name}</h1> 
          <p className="text-gray-500 font-bold">Username:{" "+userData.userName}</p>
        </div>
        <div className="mt-8 px-12"> 
        <div className="flex items-center mb-8 gap-4"> 
          <h2 className="text-2xl font-bold">User Email</h2> 
          <p className="text-gray-700 text-lg">{userData.email}</p> 
        </div>

          <div className="flex items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Phone number</h2>
            <p className="text-gray-700 text-lg">{userData.phone ? userData.phone : "12345678"}</p>
          </div>
          <div className="flex items-center mb-8">
            <p className="text-gray-700">{userData.password}</p>
          </div>
          <div className="flex items-center">
            <div className="flex flex-wrap">
              {Array.isArray(userData.interestCategory) && userData.interestCategory.length > 0 ? (
                userData.interestCategory.map((category, index) => (
                  <span
                    key={index}
                    className="mr-4 mb-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-lg"
                  >
                    {category}
                  </span>
                ))
              ) : (
                <div>

                <h3 className="text-2xl font-bold">following</h3>
                <span className="text-gray-500 text-lg">#kidney #liver #heart</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // return (
  //   <div className="mx-auto my-auto flex justify-end">
  //     <div className="p-10 bg-white rounded-md shadow-md overflow-hidden">
  //       {isLoading}
  //       {error && <p>Error: {error}</p>}
  //       <div className="flex mt-8">
  //         <img
  //           className="h-64 w-64 rounded-full object-cover border-4 border-white"
  //           src={userData.picture}
  //           alt="Profile"
  //         />
  //       </div>
  //       <div className="mt-8 text-right">
  //         <h1 className="text-4xl font-semibold">Name:{" " + userData.name}</h1>
  //         <p className="text-gray-500 font-bold">Username:{" " + userData.userName}</p>
  //       </div>
  //       <div className="mt-8 px-12 text-right">
  //         <div className="flex items-center mb-8 gap-4">
  //           <h2 className="text-2xl font-bold">User Email</h2>
  //           <p className="text-gray-700 text-lg">{userData.email}</p>
  //         </div>
  //         <div className="flex items-center mb-8 gap-4">
  //           <h2 className="text-2xl font-bold">Phone number</h2>
  //           <p className="text-gray-700 text-lg">
  //             {userData.phone ? userData.phone : "12345678"}
  //           </p>
  //         </div>
  //         <div className="flex items-center mb-8">
  //           <p className="text-gray-700">{userData.password}</p>
  //         </div>
  //         <div className="flex items-center">
  //           <div className="flex flex-wrap">
  //             {Array.isArray(userData.interestCategory) &&
  //             userData.interestCategory.length > 0 ? (
  //               userData.interestCategory.map((category, index) => (
  //                 <span
  //                   key={index}
  //                   className="mr-4 mb-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-lg"
  //                 >
  //                   {category}
  //                 </span>
  //               ))
  //             ) : (
  //               <div>
  //                 <h3 className="text-2xl font-bold">following</h3>
  //                 <span className="text-gray-500 text-lg">#kidney #liver #heart</span>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  


  };
  
  
  
  export default Profile;


  // "email" : "nigoyi7013@ikanid.com",
  //  "password" : "12345678"



//   import { useState, useEffect } from 'react';
// import axios from '../../utilities/axiosInstance';

// const ProfilePage = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         // Perform the API call to fetch user data
//         const response = await axios.get('user/profile');
        

//         console.log(response+"api called from profile >>>>>>>>>> line 152");
//         // Assuming the API response has a 'data' property containing user information
//         setUserData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message || 'An error occurred while fetching user data.');
//         setLoading(false);
//       }
//     };

//     // Call the function to fetch user data when the component mounts
//     fetchUserData();
//   }, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

//   return (
//     <div>
//       <h1>User Profile</h1>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}

//       {userData && (
//         <div>
//           <p>Name: {userData.name}</p>
//           <p>Email: {userData.email}</p>
//           {/* Add more details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
