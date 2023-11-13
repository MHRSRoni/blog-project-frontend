"use client";
import { Avatar } from "keep-react";
import { Dropdown } from "keep-react";

export const UserDropdown = () => {
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
    >
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};
