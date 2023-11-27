"use client";
import { Avatar } from "keep-react";
import { Dropdown } from "keep-react";

import { removeLocalStorage } from "../../utilities/SessionHelper";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { successNotification } from "../../utilities/NotificationHelper";
import { useNavigate } from "react-router-dom";

export const UserDropdown = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = user || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout());
    removeLocalStorage("user");
    successNotification("Logout successfully");
    window.location.href = "/";
  };

  return (
    <Dropdown
      id="drop-down"
      label={<Avatar shape="circle" size="md" img={data?.picture} />}
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
          onClick={() => navigate("/profile")}
        >
          <p className="text-base font-semibold text-slate-700">Profile</p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div
          className="flex flex-col items-start gap-1 w-40"
          onClick={() => navigate("/user/dashboard/read-list")}
        >
          <p className="text-base font-semibold text-slate-700">Read List</p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div
          className="flex flex-col items-start gap-1 w-40 "
          onClick={() => handleLogOut()}
        >
          <p className="text-base font-semibold text-slate-700">Logout</p>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};
