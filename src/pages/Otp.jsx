<<<<<<< HEAD:src/components/Userlog/Otp.jsx

import ReactCodeInput from "react-code-input";
=======
>>>>>>> 15979e0271cf9fbad06a97b7ec03c0cf7cfea6fc:src/pages/Otp.jsx
import { Button } from "keep-react";

const Otp = () => {
  return (
    <section
      className="flex justify-center items-center "
      style={{ height: "calc(100vh - 78px)", width: "100%" }}
    >
      <div className="w-4/5 sm:w-1/3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow">
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
              Your Verification code has been send {/* {RegEmail} */}
            </p>

            {/* <ReactCodeInput type="text" fields={6} /* onChange={handleOtpChange} */}
            {/* </div> */}

<<<<<<< HEAD:src/components/Userlog/Otp.jsx
            <ReactCodeInput type="text" fields={6} /* onChange={handleOtpChange} */ />
          </div>

          <div className=" flex gap-2 justify-center">
          <Button size="md" type="primary">Verify</Button>
          <Button size="md" type="outlinePrimary">Resend</Button>
=======
            <div className=" flex gap-2 justify-center">
              <Button
                variant="basic"
                size="normal"
                type="button"
                text="Verify OTP"
              />
              <Button
                variant="outline"
                size="normal"
                type="button"
                text="Resend OTP"
              />
            </div>
>>>>>>> 15979e0271cf9fbad06a97b7ec03c0cf7cfea6fc:src/pages/Otp.jsx
          </div>
        </form>
      </div>
    </section>
  );
};

export default Otp;
