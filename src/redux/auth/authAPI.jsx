import axios from "../../utilities/axiosInstance";

export const loginRequest = async (reqBody) => {
  const response = await axios.post(`user/login`, reqBody);
  return response.data;
};

export const registerRequest = async (reqBody) => {
  const response = await axios.post("/user/registration", reqBody);
  return response;
};

export const sendOtpRequest = async (email, subject) => {
  const response = await axios.get(
    `/verification/send-verification?email=${email}&subject=${subject}`
  );
  return response;
};

export const otpVerifyRequest = async (email, subject, code) => {
  const response = await axios.get(
    `/verification/verify?email=${email}&subject=${subject}&otp=${code}`
  );
  return response;
};

export const emailVerifyRequest = async (email, accessToken) => {
  const response = await axios.get(
    `/user/email-verify?access-token=${accessToken}&email=${email}`
  );
  return response;
};

export const forgotPasswordRequest = async ({ email, accessToken, data }) => {
  const response = await axios.post(
    `/user/forget-password?access-token=${accessToken}&email=${email}`,
    data
  );
  return response;
};
export const updateProfileRequest = async (reqBody) => {
  const response = await axios.post(`/user/profile/update`, reqBody);
  return response;
};
