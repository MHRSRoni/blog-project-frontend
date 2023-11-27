"use client";
import { Card, Button } from "keep-react";
import { Label, TextInput } from "keep-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EyeSlash, Eye } from "phosphor-react";
import { validateEmail } from "../../utilities/verification";
import {
  errorNotification,
  successNotification,
} from "../../utilities/NotificationHelper";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { loginRequestThunk } from "../../redux/auth/authSlice";
import { setLocalStorage } from "../../utilities/SessionHelper";

const initialFormState = {
  email: "",
  password: "",
};

export const Login = () => {
  const [data, setData] = useState(initialFormState);
  const [isShow, setIsShow] = useState(false);

  const { isLoading, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // make sure login user can not see the login page
  useEffect(() => {
    if (user?.token) return navigate("/");
  }, [user, navigate]);

  const changeHandler = (property, value) => {
    setData({
      ...data,
      [property]: value,
    });
  };

  const handleSubmit = async () => {
    if (!validateEmail(data.email)) {
      return errorNotification("Invalid email address");
    }
    const from = location?.state?.from?.pathname || "/";
    dispatch(loginRequestThunk(data))
      .unwrap()
      .then((res) => {
        if (res.success === true) {
          successNotification("login success");
          setLocalStorage("user", res);
          setData(initialFormState);
          navigate(from);
        }
      })
      .catch(() => {
        errorNotification("email and password invalid");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="block mb-2 mt-4 text-center text-2xl font-medium text-gray-900">
          User Log In
        </h1>
        <div className="w-full border-b border-primary-300 mb-4"></div>
        <div className="mb-4">
          <Label value="Email" />
          <span className="text-red-600 pl-2">*</span>
          <TextInput
            placeholder="Email"
            color="gray"
            className="w-full border p-2 rounded"
            value={data.email}
            handleOnChange={(e) => changeHandler("email", e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Label value="Password" />
          <span className="text-red-600 pl-2">*</span>
          <TextInput
            placeholder="Password"
            type={isShow ? "text" : "password"}
            color="gray"
            className="w-full border p-2 rounded"
            icon={
              <span
                className="pointer-events-auto"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? (
                  <Eye size={20} color="#5E718D" />
                ) : (
                  <EyeSlash size={20} color="#5E718D" />
                )}
              </span>
            }
            iconPosition="right"
            value={data.password}
            handleOnChange={(e) => changeHandler("password", e.target.value)}
          />
        </div>

        <div className="flex justify-center" onClick={handleSubmit}>
          <Button size="md" type="primary">
            Login
          </Button>
        </div>
      </Card>
      {isLoading && <Spinner />}
    </div>
  );
};
