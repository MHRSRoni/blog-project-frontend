"use client";
import { Card, Button } from "keep-react";
import { Label, TextInput } from "keep-react";

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="md:p-6 p-5 shadow-sm w-full md:w-2/3 lg:w-1/2 xl:w-1/2">
        <div>
          <Label value="Email" />
          <TextInput
            id="#id-8"
            placeholder="Email"
            color="gray"
            className="w-50"
          />
        </div>
        <div>
          <Label value="Password" />
          <TextInput
            id="#id-8"
            placeholder="Password"
            color="gray"
            className="w-50"
          />
        </div>
        <div>
          <Label value="Confirm Password" />
          <TextInput
            id="#id-8"
            placeholder="Confirm Password"
            color="gray"
            className="w-50"
          />
        </div>
        <Button size="md" type="primary">
          Sign Up
        </Button>
      </Card>
    </div>
  );
};
