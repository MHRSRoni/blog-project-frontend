"use client";
import { Sidebar } from "keep-react";
import {
  Chat,
  ShoppingBagOpen,
  AddressBook,
  House,
  UserPlus,
  Users,
} from "phosphor-react";

export const SideBar = () => {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<House size={24} />}>
            Home
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={<Chat size={24} />}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<AddressBook size={24} />}>
            Contact
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<UserPlus size={24} />}>
            About
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
