
import { useState } from 'react';



const Profile = () => {

    const initialUserData = {
        name: 'John Doe',
        userName: 'johndoe',
        email: 'john.doe@example.com',
        picture: 'https://example.com/profile-picture.jpg',
        phone: '123-456-7890',
        password: '********',
        interestCategory: ['Technology', 'Travel', 'Food'],
      };
    
      const [userData, /* setUserData */] = useState(initialUserData);
    
      return (
        <div className="container mx-auto p-8">
          <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
            <div className="flex justify-center mt-4">
              <img
                className="h-20 w-20 rounded-full object-cover"
                src={userData.picture}
                alt="Profile"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-2xl font-semibold">{userData.name}</h1>
              <p className="text-gray-500">@{userData.userName}</p>
            </div>
            <div className="mt-4 px-6">
              <div className="flex items-center mb-4">
                <span className="w-5 h-5 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                    />
                  </svg>
                </span>
                <p className="text-gray-700">{userData.email}</p>
              </div>
              <div className="flex items-center mb-4">
                <span className="w-5 h-5 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                <p className="text-gray-700">{userData.phone}</p>
              </div>
              <div className="flex items-center mb-4">
                <span className="w-5 h-5 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                    />
                  </svg>
                </span>
                <p className="text-gray-700">{userData.password}</p>
              </div>
              <div className="flex items-center">
                <span className="w-5 h-5 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                    />
                  </svg>
                </span>
                <div className="flex flex-wrap">
                  {userData.interestCategory.map((category, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  };
  
  
  
  export default Profile;