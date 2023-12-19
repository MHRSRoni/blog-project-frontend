import ReactCodeInput from "react-code-input";
import { Button } from "keep-react";
import { useState } from "react";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../utilities/SessionHelper";
import { useNavigate } from "react-router-dom";
import {
  errorNotification,
  successNotification,
} from "../../utilities/NotificationHelper";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import {
  accountVerifyRequestThunk,
  otpVerifyRequestThunk,
  resendOtpRequestThunk,
} from "../../redux/auth/authSlice";

const VerifyOtp = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { email, subject } = getLocalStorage("info");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  handleVerify
  const handleVerify = async () => {
    setLoading(true);

    if (code.length !== 6) {
      setLoading(false);
      return errorNotification("opt must be 6 character");
    }

    // for email verification
    if (subject === "email verification") {
      dispatch(accountVerifyRequestThunk({ email, subject, code }))
        .unwrap()
        .then((res) => {
          if (res.success === true) {
            setCode("");
            removeLocalStorage("info");
            setLoading(false);
            successNotification(res.message);
            navigate("/login", { replace: true });
          }
        })
        .catch((error) => {
          setLoading(false);
          errorNotification(error.message);
        });
    }

    // only for forget password verification
    if (subject === "forget password") {
      dispatch(otpVerifyRequestThunk({ email, subject, code }))
        .unwrap()
        .then((res) => {
          if (res.success === true) {
            successNotification(res.message);
            setCode("");
            setLocalStorage("info", {
              email: email,
              subject: "forget password",
              accessToken: res["access-token"],
            });
            setLoading(false);
            navigate("/forgot-password", { replace: true });
          }
        })
        .catch((error) => {
          setLoading(false);
          errorNotification(error.message);
        });
    }
  };

  const resendOTPHandler = async () => {
    setLoading(true);

    dispatch(resendOtpRequestThunk({ email, subject }))
      .unwrap()
      .then((res) => {
        if (res.success === true) {
          setLoading(false);
          successNotification(res.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        errorNotification(error.message);
      });
  };

  return (
    <section
      className="flex justify-center items-center "
      style={{ height: "calc(100vh - 78px)", width: "100%" }}
    >
      <div className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h2 className="block mb-2 mt-4 text-center text-3xl font-medium text-gray-900">
          ওটিপি
        </h2>
        <div className="w-full border-b border-primary-300 mb-4"></div>
        <form>
          <div className="mb-6 px-4 text-center">
            <h2 className="block mb-2 text-xl text-center font-medium text-gray-800">
              আপনার অ্যাকাউন্ট যাচাই করতে দয়া করে এককালীন পাসওয়ার্ড লিখুন
            </h2>

            <p className="text-center">
              আপনার যাচাইকরণ কোড ইমেল ঠিকানায় পাঠানো হয়েছে
            </p>

            <ReactCodeInput
              type="text"
              fields={6}
              onChange={(e) => setCode(e)}
            />
          </div>

          <div className=" flex gap-2 justify-center mb-4">
            <Button size="md" type="primary" onClick={handleVerify}>
              যাচাই করুন
            </Button>
            <Button size="md" type="outlinePrimary" onClick={resendOTPHandler}>
              আবার পাঠান
            </Button>
          </div>
        </form>
      </div>
      {loading && <Spinner />}
    </section>
  );
};

export default VerifyOtp;
