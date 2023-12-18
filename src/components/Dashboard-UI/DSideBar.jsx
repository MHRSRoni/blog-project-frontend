"use client";
import { Sidebar } from "keep-react";
import { Chat, Folders, BookOpen } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const DSidebarComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.ItemGroup>
          <Sidebar.Item
            icon={<Chat size={24} />}
            onClick={() => navigate("/user/dashboard")}
            className=" cursor-pointer"
          >
            <p className="text-base font-medium text-slate-700">সকল পোস্ট</p>
          </Sidebar.Item>
          <Sidebar.Item
            icon={<Folders size={24} />}
            className=" cursor-pointer"
            onClick={() => navigate("/user/dashboard/addCategory")}
          >
            <p className="text-base font-medium text-slate-700">
              সিলেক্ট ক্যাটাগরি
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            icon={<BookOpen size={24} />}
            className=" cursor-pointer"
            onClick={() => navigate("/user/dashboard/read-list")}
          >
            <p className="text-base font-medium text-slate-600">রিড লিস্ট </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  );
};

export default DSidebarComponent;
