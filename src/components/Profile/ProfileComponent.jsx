import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileThunk } from '../../redux/user/userProfileSlice';
import axios from '../../utilities/axiosInstance';
import toast from 'react-hot-toast';
import { errorNotification, successNotification } from '../../utilities/NotificationHelper';




const ProfileComponent = () => {
    const dispatch = useDispatch()
    // Use an empty object as the default value for profile
    const { isLoading, profile = {}, error } = useSelector((state) => state.profile);
    const [userData, setUserData] = useState({
        picture: '',
        name: '',
        phone: '',
        email: ''

    });
    const [imageShow, setImageShow] = useState();
    const [image, setImage] = useState()

    useEffect(() => {
        // Dispatch the async thunk to fetch user data when the component mounts
        dispatch(getUserProfileThunk());
    }, [dispatch]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleImageChange = (e) => {
        setImageShow(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("picture", image);
        data.append('name', userData.name);
        data.append('phone', userData.phone);
        try {
            // Use the manually set token in the headers
            await axios.post('/user/profile/update', data, {
            });
            successNotification('Your profile Updated Successfully')

        } catch (error) {
            console.error('Fail to Update Profile:', error);

            errorNotification('Failed to Update Profile, Try Again')
        }
    }

    useEffect(() => {
        setUserData(profile);
    }, [profile]);

    return (
        <div className='container mx-auto flex'>

            <div className="bg-white p-8 rounded shadow-md w-full h-[100vh]">
                {isLoading}

                {error && <p>Error: {error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-center">
                        <img src={imageShow || userData.picture} alt="Profile Image" className="mx-auto rounded-full h-40 w-40" />
                    </div>


                    <div className="flex justify-start flex-wrap gap-4">

                        <div className="mb-4 w-[31%]">
                            <label htmlFor="fileInput" className="block text-sm font-medium text-gray-600">Choose File</label>
                            <input
                                onChange={handleImageChange}
                                placeholder="Your text will be here" type="file" id="fileInput" name="picture" className="mt-1 p-1 border rounded-md w-full" />
                        </div>


                        <div className="mb-4 w-[31%]">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
                            <input
                                placeholder={userData.email || ""}
                                disabled
                                onChange={handleChange}
                                type="email" id="email" name="email" className="mt-1 p-2 border rounded-md w-full" />
                        </div>


                        <div className="mb-4 w-[31%]">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">First Name</label>
                            <input
                                onChange={handleChange}
                                value={userData.name}
                                placeholder="Your  Name"
                                type="text" id="name"
                                name="name" className="mt-1 p-2 border rounded-md w-full" />
                        </div>


                        <div className="mb-4 w-[31%]">
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">Mobile</label>
                            <input
                                onChange={handleChange}
                                value={userData.phone}
                                placeholder="Your Mobile Number"
                                type="tel" id="mobile" name="phone" className="mt-1 p-2 border rounded-md w-full" />
                        </div>


                    </div>

                    <div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default ProfileComponent;