
"use client";
import { Sidebar } from "keep-react";
import {
  Chat,
  Eye,
  ThumbsDown,
  ThumbsUp
} from "phosphor-react";

const DSidebarComponent = () => {
  return (
    <div className="h-screen bg-white">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<Chat size={24} />} label="6">
            Posts
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Eye size={24} />} label="86">
            Total Views
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ThumbsUp size={24} />} label="310">
            Total Likes
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ThumbsDown size={24} />} label="69">
            Total Dislikes
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  );
  
}


export default DSidebarComponent;