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
import { setLocalStorage } from "../../utilities/SessionHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerRequestThunk } from "../../redux/auth/authSlice";

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
  const { isLoading, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if (data.password !== data.repeatPassword) {
      return errorNotification("password does not match");
    }

    if (!validateEmail(data.email)) {
      return errorNotification("Invalid email address");
    }

    // thunk function invoke
    dispatch(registerRequestThunk(data))
      .unwrap()
      .then((res) => {
        successNotification(res.message);
        setLocalStorage("info", {
          email: data.email,
          subject: "email verification",
        });
        navigate("/verify-otp");
      })
      .catch((error) => {
        errorNotification(error.message);
      });
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
              রেজিস্ট্রেশন
            </h1>
            <div className="w-full border-b border-primary-300 mb-4"></div>
          </div>
          <div className="w-full mb-4">
            <Label value="নেম" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              placeholder="নেম লিখুন"
              type="text"
              color="gray"
              className="w-full border p-2 rounded"
              value={data.name}
              handleOnChange={(e) => changeHandler("name", e.target.value)}
            />
          </div>
          <div className="w-full mb-4">
            <Label value="ইউজার নেম" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              type="text"
              placeholder="ইউজার নেম লিখুন"
              color="gray"
              className="w-full border p-2 rounded"
              value={data.userName}
              handleOnChange={(e) => changeHandler("userName", e.target.value)}
            />
          </div>
          <div className="w-full mb-4">
            <Label value="ইমেইল" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              type="email"
              placeholder="ইমেইল"
              color="gray"
              className="w-full border p-2 rounded"
              value={data.email}
              handleOnChange={(e) => changeHandler("email", e.target.value)}
            />
          </div>

          <div className="w-full mb-4">
            <Label value="পাসওয়ার্ড" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              placeholder="পাসওয়ার্ড"
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
            <Label value="কন্ফার্ম পাসওয়ার্ড" />
            <span className="text-red-600 pl-2">*</span>
            <TextInput
              placeholder="কন্ফার্ম  পাসওয়ার্ড"
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
              সাইন আপ
            </Button>
          </div>
        </form>
      </Card>
      {isLoading && <Spinner />}
    </div>
  );
};
