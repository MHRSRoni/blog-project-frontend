"use client";
import { Card, Button } from "keep-react";
import { Label,TextInput } from "keep-react";

export const ResetPass = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="block mb-2 mt-4 text-center text-2xl font-medium text-gray-900">
          Reset Password
        </h1>
        <div className="w-full border-b border-primary-300 mb-4"></div>
        <div className="mb-4">
          <Label value="New Password" />
          <TextInput
            id="#id-8"
            placeholder="New Password"
            color="gray"
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <Label value="Confirm Password" />
          <TextInput
            id="#id-8"
            placeholder="Confirm Password"
            color="gray"
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="flex justify-center">
          <Button size="md" type="primary">
            Reset
          </Button>
        </div>
      </Card>
    </div>
  );
  
  
  };