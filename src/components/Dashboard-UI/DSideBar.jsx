
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
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="w-2/4">
        <Sidebar.ItemGroup>
          
          <Sidebar.Item href="#" icon={<Chat size={24} />} label="6">
            Posts
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Eye size={24} />} label="86">
            Total Views
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ThumbsUp size={24} />} label="3105">
            Total Likes
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ThumbsDown size={24} />} label="69">
            Total Dislikes
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
    </Sidebar>
  );
}


export default DSidebarComponent;