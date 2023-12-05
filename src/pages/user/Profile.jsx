import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileThunk } from '../../redux/user/userProfileSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const { isLoading, profile = {}, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getUserProfileThunk());
  }, [dispatch]);

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
  

  };
  
  
  
  export default Profile;


  // "email" : "nigoyi7013@ikanid.com",
  //  "password" : "12345678"


