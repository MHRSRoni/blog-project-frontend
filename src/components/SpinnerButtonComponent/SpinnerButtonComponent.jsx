"use client";
import { Button, Spinner } from "keep-react";

export const SpinnerButtonComponent = () => {
  return (
    <>
      <Button
        type="primary"
        size="xs"
        style={{ cursor: "not-allowed", padding: "0 1rem" }}
      >
        <span className="pr-2">
          <Spinner color="info" size="md" />
        </span>
        Loading...
      </Button>
    </>
  );
};
