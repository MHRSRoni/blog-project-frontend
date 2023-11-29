import { Button, TextInput } from "keep-react";
import { useState } from "react";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utilities/SessionHelper";
import { useNavigate } from "react-router-dom";
import {
  errorNotification,
  successNotification,
} from "../../utilities/NotificationHelper";
import Spinner from "../../components/Spinner/Spinner";
import axios from "../../utilities/axiosInstance";
import { validateEmail } from "../../utilities/verification";

const SendOtp = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //  handleVerify
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (validateEmail(email)) {
        const { data } = await axios.get(
          `/verification/send-verification?email=${email}&subject=forget password`
        );
        if (data.success === true) {
          successNotification(data.message);
          setLocalStorage("info", { email, subject: "forget password" });
          setEmail("");
          navigate("/verify-otp");
        } else {
          errorNotification("some think went wrong");
        }
      } else {
        errorNotification("invalid Email address");
      }

      setLoading(false);
    } catch (error) {
      errorNotification(error?.response?.data?.message);
    }
  };

  //   setLoading(true);
  //   try {
  //     const { status } = await axios.get(
  //       `/verification/send-verification?email=${userEmail.email}&subject=email verification`
  //     );

  //     if (status === 200) {
  //       successNotification("check your email for verify otp code");
  //     }

  //     setLoading(false);
  //   } catch (error) {
  //     errorNotification(error?.response?.data?.message);
  //     setLoading(false);
  //   }
  // };

  return (
    <section
      className="flex justify-center items-center "
      style={{ height: "calc(100vh - 78px)", width: "100%" }}
    >
      <div className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h2 className="block mb-2 mt-4 text-center text-3xl font-medium text-gray-900 ">
          Email Verification
        </h2>

        <form>
          <div className="mb-6 px-4 text-center">
            <TextInput
              placeholder="please Enter your email address"
              color="gray"
              className="w-full border p-2 rounded"
              sizing="md"
              handleOnChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className=" flex gap-2 justify-center mb-4">
            <Button size="md" type="primary" onClick={handleSubmit}>
              Send
            </Button>
          </div>
        </form>
      </div>
      {loading && <Spinner />}
    </section>
  );
};

export default SendOtp;