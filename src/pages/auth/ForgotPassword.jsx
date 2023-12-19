"use client";
import { Card, Button } from "keep-react";
import { Label, TextInput } from "keep-react";
import { useState } from "react";
import { EyeSlash, Eye } from "phosphor-react";
import {
  errorNotification,
  successNotification,
} from "../../utilities/NotificationHelper";
import { useNavigate } from "react-router-dom";
import {
  getLocalStorage,
  removeLocalStorage,
} from "../../utilities/SessionHelper";
import Spinner from "../../components/Spinner/Spinner";
import { forgotPasswordRequestThunk } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const initialFormState = {
  password: "",
  repeatPassword: "",
};

const initialShowState = {
  password: false,
  repeatPassword: false,
};

export const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialFormState);
  const [isShow, setIsShow] = useState(initialShowState);
  const { email, accessToken } = getLocalStorage("info");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  // handle submit
  const handleSubmit = async () => {
    setLoading(true);
    if (data.password !== data.repeatPassword) {
      setLoading(false);
      return errorNotification("password does not Match");
    }

    dispatch(forgotPasswordRequestThunk({ email, accessToken, data }))
      .unwrap()
      .then((res) => {
        if (res.success === true) {
          successNotification(res.message);
          removeLocalStorage("info");
          setLoading(false);
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => {
        setLoading(false);
        errorNotification(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="block mb-2 mt-4 text-center text-2xl font-medium text-gray-900">
          পাসওয়ার্ড রিসেট করুন
        </h1>
        <div className="w-full border-b border-primary-300 mb-4"></div>
        <div className="mb-4">
          <Label value="নতুন পাসওয়ার্ড" />
          <span className="text-red-600 pl-2">*</span>
          <TextInput
            placeholder="পাসওয়ার্ড"
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
        <div className="mb-4">
          <Label value="কন্ফার্ম পাসওয়ার্ড" />
          <span className="text-red-600 pl-2">*</span>

          <TextInput
            placeholder="কন্ফার্ম পাসওয়ার্ড"
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
        <div className="flex justify-center" onClick={handleSubmit}>
          <Button size="md" type="primary">
            রিসেট
          </Button>
        </div>
      </Card>
      {loading && <Spinner />}
    </div>
  );
};
