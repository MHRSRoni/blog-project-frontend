"use client";
import { Tooltip } from "keep-react";

const TooltipComponent = ({ text, children }) => {
  return (
    <Tooltip
      content={text}
      trigger="hover"
      placement="top"
      animation="duration-300"
      style="dark"
    >
      {children}
    </Tooltip>
  );
};

export default TooltipComponent;
