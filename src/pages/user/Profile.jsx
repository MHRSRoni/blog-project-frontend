import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorNotification,
  successNotification,
} from "../../utilities/NotificationHelper";
import { updateProfileThunk } from "../../redux/auth/authSlice";
import { setLocalStorage } from "../../utilities/SessionHelper";
import Spinner from "../../components/Spinner/Spinner";

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    picture: user.data.picture,
    name: user.data.name,
    userName: user.data.userName,
    phone: user.data.phone,
    email: user.data.email,
  });

  const { email, picture, phone, userName, name } = userData;

  const [imageShow, setImageShow] = useState();
  const [image, setImage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageShow(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (image) {
      data.append("picture", image);
    }
    data.append("name", name);
    data.append("phone", phone);

    // call to update thunk function
    dispatch(updateProfileThunk(data))
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          setLocalStorage("user", { ...user, data: res.data.data });
          successNotification("successfully updated");
        }
      })
      .catch(() => {
        errorNotification("something went wrong");
      });
  };

  return (
    <div className="container mx-auto flex">
      <div className="bg-white p-8 rounded shadow-md w-full h-[100vh]">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-center">
            <img
              src={imageShow ?? picture}
              alt="Profile Image"
              className="mx-auto rounded-full h-40 w-40"
            />
          </div>

          <div className="flex justify-start flex-wrap gap-4">
            <div className="mb-4 w-[31%]">
              <label
                htmlFor="fileInput"
                className="block text-sm font-medium text-gray-600"
              >
                Choose File
              </label>
              <input
                onChange={handleImageChange}
                placeholder="Your text will be here"
                type="file"
                id="fileInput"
                name="picture"
                className=" border rounded-l-lg w-full rounded-md mt-1"
              />
            </div>

            <div className="mb-4 w-[31%]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Your Email
              </label>
              <input
                placeholder={email}
                disabled
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded-md w-full cursor-not-allowed"
              />
            </div>

            <div className="mb-4 w-[31%]">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                value={name}
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4 w-[31%]">
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-600 "
              >
                user name
              </label>
              <input
                onChange={handleChange}
                value={userName}
                placeholder="user name"
                type="text"
                id="name"
                name="userName"
                disabled
                className="mt-1 p-2 border rounded-md w-full cursor-not-allowed"
              />
            </div>

            <div className="mb-4 w-[31%]">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-600"
              >
                Mobile
              </label>
              <input
                onChange={handleChange}
                value={phone}
                placeholder="Your Mobile Number"
                type="tel"
                id="mobile"
                name="phone"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          </div>

          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Update
            </button>
          </div>
        </form>
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Profile;
