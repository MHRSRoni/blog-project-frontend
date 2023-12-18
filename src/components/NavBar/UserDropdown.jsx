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
          <p className="text-base font-medium text-slate-700">ড্যাশবোর্ড </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div
          className="flex flex-col items-start gap-1 w-40"
          onClick={() => navigate("/user/dashboard/profile")}
        >
          <p className="text-base font-medium text-slate-700">প্রোফাইল</p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div
          className="flex flex-col items-start gap-1 w-40"
          onClick={() => navigate("/user/dashboard")}
        >
          <p className="text-base font-medium text-slate-700">
            চেঞ্জ পাসওয়ার্ড{" "}
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div
          className="flex flex-col items-start gap-1 w-40 "
          onClick={() => handleLogOut()}
        >
          <p className="text-base font-medium text-slate-700">লগ আউট </p>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};
