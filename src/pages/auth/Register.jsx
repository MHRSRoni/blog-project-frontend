"use client";
import { Card, Button } from "keep-react";
import { Label, TextInput } from "keep-react";
import { EyeSlash, Eye } from "phosphor-react";
import { useEffect, useState } from "react";

import Spinner from "../../components/Spinner/Spinner";
import {
  errorNotification,
  successNotification,
} from "../../utilities/NotificationHelper";
import { validateEmail } from "../../utilities/verification";
import axios from "../../utilities/axiosInstance";
import { setLocalStorage } from "../../utilities/SessionHelper";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const initialFormState = {
  name: "",
  userName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const initialShowState = {
  password: false,
  repeatPassword: false,
};

export const Register = () => {
  const [data, setData] = useState(initialFormState);
  const [isShow, setIsShow] = useState(initialShowState);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);

  // make sure login user can not see the login page
  useEffect(() => {
    if (user?.token) return navigate("/");
  }, [user, navigate]);

  const handleShow = (property, value) => {
    setIsShow({
      ...isShow,
      [property]: value,
    });
  };

  const changeHandler = (property, value) => {
    setData({
      ...data,
      [property]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (data.password !== data.repeatPassword) {
        return errorNotification("password does not match");
      }

      if (!validateEmail(data.email)) {
        return errorNotification("Invalid email address");
      }

      const { status } = await axios.post("/user/registration", data);

      if (status === 201) {
        const { status } = await axios.get(
          `/verification/send-verification?email=${data.email}&subject=email verification`
        );

        if (status === 200) {
          successNotification("check your email for verify otp code");
          setLocalStorage("email", { email: data.email });
          navigate("/otp");
        }
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorNotification(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ height: "calc(100vh - 78px)", width: "100%" }}
    >
      <Card className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow">
        <form>
          <div className="text-center mb-4">
            <h1 className="block mb-2 text-2xl font-medium text-gray-900">
              Registration
            </h1>
            <div className="w-full border-b border-primary-300 mb-4"></div>
          </div>
          <div className="w-full mb-4">
            <Label value="Name" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              placeholder="Type Your name"
              type="text"
              color="gray"
              className="w-full border p-2 rounded"
              value={data.name}
              handleOnChange={(e) => changeHandler("name", e.target.value)}
            />
          </div>
          <div className="w-full mb-4">
            <Label value="User Name" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              type="text"
              placeholder="Type Your User name"
              color="gray"
              className="w-full border p-2 rounded"
              value={data.userName}
              handleOnChange={(e) => changeHandler("userName", e.target.value)}
            />
          </div>
          <div className="w-full mb-4">
            <Label value="Email" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              type="email"
              placeholder="Email"
              color="gray"
              className="w-full border p-2 rounded"
              value={data.email}
              handleOnChange={(e) => changeHandler("email", e.target.value)}
            />
          </div>
          <div className="w-full mb-4">
            <Label value="Password" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              placeholder="Password"
              type={isShow.password ? "text" : "password"}
              color="gray"
              className="w-full border p-2 rounded"
              icon={
                <span
                  className="pointer-events-auto"
                  onClick={() => handleShow("password", !isShow.password)}
                >
                  {isShow.password ? (
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
          <div className="w-full mb-4">
            <Label value="Confirm Password" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              placeholder="Confirm Password"
              color="gray"
              type={isShow.repeatPassword ? "text" : "password"}
              className="w-full border p-2 rounded"
              icon={
                <span
                  className="pointer-events-auto"
                  onClick={() =>
                    handleShow("repeatPassword", !isShow.repeatPassword)
                  }
                >
                  {isShow.repeatPassword ? (
                    <Eye size={20} color="#5E718D" />
                  ) : (
                    <EyeSlash size={20} color="#5E718D" />
                  )}
                </span>
              }
              iconPosition="right"
              value={data.repeatPassword}
              handleOnChange={(e) =>
                changeHandler("repeatPassword", e.target.value)
              }
            />
          </div>
          <div className="flex justify-center">
            <Button size="md" type="primary" onClick={handleSubmit}>
              Sign Up
            </Button>
          </div>
        </form>
      </Card>
      {loading && <Spinner />}
    </div>
  );
};
