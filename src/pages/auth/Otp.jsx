import ReactCodeInput from "react-code-input";
import { Button } from "keep-react";
import { useState } from "react";
import {
  getLocalStorage,
  removeLocalStorage,
} from "../../utilities/SessionHelper";
import { useNavigate } from "react-router-dom";
import {
  errorNotification,
  successNotification,
} from "../../utilities/NotificationHelper";
import Spinner from "../../components/Spinner/Spinner";
import axios from "../../utilities/axiosInstance";

const Otp = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const userEmail = getLocalStorage("email");
  const navigate = useNavigate();

  //  handleVerify
  const handleVerify = async () => {
    setLoading(true);
    try {
      if (code.length === 6) {
        const { data } = await axios.get(
          `/verification/verify?email=${userEmail.email}&subject=email verification&otp=${code}`
        );

        if (data.success === true && data["access-token"]) {
          const res = await axios.get(
            `/user/email-verify?access-token=${data["access-token"]}&email=${userEmail.email}`
          );

          if (res.data.success === true) {
            successNotification("email verify success");
            navigate("/login");
            setCode("");
            removeLocalStorage("email");
          } else {
            errorNotification("email verification failed");
          }
        } else {
          errorNotification("otp verification failed");
        }
      }
      setLoading(false);
    } catch (error) {
      errorNotification(error?.response?.data?.message);
    }
  };

  const resendOTPHandler = async () => {
    setLoading(true);
    try {
      const { status } = await axios.get(
        `/verification/send-verification?email=${userEmail.email}&subject=email verification`
      );

      if (status === 200) {
        successNotification("check your email for verify otp code");
      }

      setLoading(false);
    } catch (error) {
      errorNotification(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <section
      className="flex justify-center items-center "
      style={{ height: "calc(100vh - 78px)", width: "100%" }}
    >
      <div className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h2 className="block mb-2 mt-4 text-center text-3xl font-medium text-gray-900">
          OTP
        </h2>
        <div className="w-full border-b border-primary-300 mb-4"></div>
        <form>
          <div className="mb-6 px-4 text-center">
            <h2 className="block mb-2 text-xl text-center font-medium text-gray-800">
              Please Enter the one time password to verify your account
            </h2>

            <p className="text-center">
              Your Verification code has been sent to email address
            </p>

            <ReactCodeInput
              type="text"
              fields={6}
              onChange={(e) => setCode(e)}
            />
          </div>

          <div className=" flex gap-2 justify-center mb-4">
            <Button size="md" type="primary" onClick={handleVerify}>
              Verify
            </Button>
            <Button size="md" type="outlinePrimary" onClick={resendOTPHandler}>
              Resend
            </Button>
          </div>
        </form>
      </div>
      {loading && <Spinner />}
    </section>
  );
};

export default Otp;
