"use client";
import { Card } from "keep-react";
import { Label,TextInput } from "keep-react";
import { useNavigate } from "react-router-dom";

export const ResetEmail = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate.push('/otp');
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="block mb-2 mt-4 text-center text-2xl font-medium text-gray-900">
          User Log In
        </h1>
        <div className="w-full border-b border-primary-300 mb-4"></div>
        <div className="mb-4">
          <Label value="Email" />
          <TextInput
            id="#id-8"
            placeholder="Email"
            color="gray"
            className="w-full border p-2 rounded"
          />
        </div>
        <button onClick={handleButtonClick}>Reset</button>
      </Card>
    </div>
  );
  
  
  };