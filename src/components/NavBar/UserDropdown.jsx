"use client";
import { Avatar } from "keep-react";
import { Dropdown } from "keep-react";
import { useNavigate } from "react-router-dom";

export const UserDropdown = () => {
  const navigate = useNavigate();
  return (
    <Dropdown
      id="drop-down"
      label={
        <Avatar
          shape="circle"
          size="md"
          img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      }
      placement="bottom-end"
      type=""
      size="xs"
      dismissOnClick={true}
      arrowIcon={false}
      floatingArrow={true}
    >
      <Dropdown.Item>
        <div
          className="flex flex-col items-start gap-1 w-40"
          onClick={() => navigate("/user/dashboard")}
        >
          <p className="text-base font-semibold text-slate-700">Dashboard</p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div
          className="flex flex-col items-start gap-1 w-40"
          onClick={() => navigate()}
        >
          <p className="text-base font-semibold text-slate-700">Profile</p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div
          className="flex flex-col items-start gap-1 w-40"
          onClick={() => navigate("/user/read-list")}
        >
          <p className="text-base font-semibold text-slate-700">Read List</p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div
          className="flex flex-col items-start gap-1 w-40"
          onClick={() => navigate()}
        >
          <p className="text-base font-semibold text-slate-700">Logout</p>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};
