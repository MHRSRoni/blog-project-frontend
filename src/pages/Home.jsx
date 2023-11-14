import { Tabs } from "keep-react";
import Card from "../components/Card/Card";
import PostCard from "../components/post/PostCard";
import { SideBar } from "../components/NavBar/SideBar";

const Home = () => {
  return (
    <div className="container mx-auto  flex pt-3 ">
      <div className="left hidden lg:block lg:basis-2/12 h-screen ">
        <SideBar />
      </div>
      <div className="middle basis-12/12 lg:basis-7/12">
        <Tabs aria-label="tabs" style="underline" borderPosition="bottom">
          <Tabs.Item title="Relevant">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Tabs.Item>
          <Tabs.Item title="Latest">
            <PostCard />
          </Tabs.Item>
          <Tabs.Item title="Top">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Tabs.Item>
        </Tabs>
      </div>
      <div className="right hidden lg:block  lg:basis-3/12 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
