import React, { useState } from 'react';
import { Label, TextInput } from "keep-react";
import { EyeSlash, Eye } from "phosphor-react";
import axios from '../../utilities/axiosInstance';
import { errorNotification, successNotification } from '../../utilities/NotificationHelper';
import { useLocation, useNavigate } from 'react-router-dom';
const initialShowState = {
    curPass: false,
    newPass: false,
    conNewPass: false
};

const PasswordChange = () => {
    const [data, setData] = useState({ oldPassword: '', newPassword: '', confirmPassword: '', });
    const { oldPassword, newPassword, confirmPassword } = data;

    const [isShow, setIsShow] = useState(initialShowState);

    const handleInputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }


    const handleShow = (property, value) => {
        setIsShow({
            ...isShow,
            [property]: value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('/user/profile/update-password', data)
            .then(() => {
                successNotification("Password Update Successfully");

            })
            .catch(error => errorNotification("Something Went Wrong! Please Check your password and try again"))
    }


    return (
        <div className='container mx-auto flex'>
            <div className="bg-white p-8 rounded shadow-md w-full h-[100vh]">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-start flex-wrap gap-4">

                        <div className="mb-4 w-[31%]">
                            <Label value="Current Password" />
                            <span className="text-red-600 pl-2">*</span>
                            <TextInput
                                placeholder="Current Password"
                                type={isShow.curPass ? "text" : "password"}
                                color="gray"
                                className="w-full border p-2 rounded"
                                icon={
                                    <span
                                        className="pointer-events-auto"
                                        onClick={() => handleShow("curPass", !isShow.curPass)}
                                    >
                                        {isShow.curPass ? (
                                            <Eye size={20} color="#5E718D" />
                                        ) : (
                                            <EyeSlash size={20} color="#5E718D" />
                                        )}
                                    </span>
                                }
                                iconPosition="right"
                                handleOnChange={handleInputChange}
                                value={oldPassword}
                                name="oldPassword"
                            />
                        </div>


                        <div className="mb-4 w-[31%]">

                            <Label value="New Password" />
                            <span className="text-red-600 pl-2">*</span>
                            <TextInput
                                placeholder="New Password"
                                type={isShow.newPass ? "text" : "password"}
                                color="gray"
                                className="w-full border p-2 rounded"
                                icon={
                                    <span
                                        className="pointer-events-auto"
                                        onClick={() => handleShow("newPass", !isShow.newPass)}
                                    >
                                        {isShow.newPass ? (
                                            <Eye size={20} color="#5E718D" />
                                        ) : (
                                            <EyeSlash size={20} color="#5E718D" />
                                        )}
                                    </span>
                                }
                                iconPosition="right"
                                handleOnChange={handleInputChange}
                                value={newPassword}
                                name="newPassword"
                            />
                        </div>

                        <div className="mb-4 w-[31%]">

                            <Label value="Confirm New Password" />
                            <span className="text-red-600 pl-2">*</span>
                            <TextInput
                                placeholder="Confirm New Password"
                                type={isShow.conNewPass ? "text" : "password"}
                                color="gray"
                                className="w-full border p-2 rounded"
                                icon={
                                    <span
                                        className="pointer-events-auto"
                                        onClick={() => handleShow("conNewPass", !isShow.conNewPass)}
                                    >
                                        {isShow.conNewPass ? (
                                            <Eye size={20} color="#5E718D" />
                                        ) : (
                                            <EyeSlash size={20} color="#5E718D" />
                                        )}
                                    </span>
                                }
                                iconPosition="right"
                                handleOnChange={handleInputChange}
                                value={confirmPassword}
                                name="confirmPassword"
                            />
                        </div>

                    </div>

                    <div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default PasswordChange;