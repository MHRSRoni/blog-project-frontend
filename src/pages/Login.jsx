"use client";
import { Card, Button } from "keep-react";
import { Label,TextInput } from "keep-react";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="md:p-6 p-5 max-w-lg shadow-md bg-white">
        <div>
          <Label value="Email" />
          <TextInput
            id="#id-8"
            placeholder="Email"
            color="gray"
          />
        </div>
        <div>
          <Label value="Password" />
          <TextInput
            id="#id-8"
            placeholder="Password"
            color="gray"
          />
        </div>
        <Button size="md" type="primary">
          Login
        </Button>
      </Card>
    </div>
  );
  };