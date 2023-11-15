
import ReactCodeInput from "react-code-input";
import { Button } from "keep-react";

const Otp = () => {
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
              Your Verification code has been sent to emailaddress{/* {RegEmail} */}
            </p>

            <ReactCodeInput type="text" fields={6} /* onChange={handleOtpChange} */ />
          </div>

          <div className=" flex gap-2 justify-center mb-4">
          <Button size="md" type="primary">Verify</Button>
          <Button size="md" type="outlinePrimary">Resend</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Otp;
