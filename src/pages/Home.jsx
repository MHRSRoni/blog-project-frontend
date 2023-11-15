import { Tabs } from "keep-react";
import Card from "../components/Card/Card";
import PostCard from "../components/post/PostCard";
import { SideBar } from "../components/NavBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostThunk } from "../redux/post/postSlice";
import Spinner from "../components/Spinner/Spinner";

const Home = () => {
  const { isLoading, posts, error } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostThunk());
  }, []);

  return (
    <div className="container mx-auto  flex pt-3 ">
      <div className="left hidden lg:block lg:basis-2/12 h-screen ">
        <SideBar />
      </div>
      <div className="middle basis-12/12 lg:basis-7/12">
        <Tabs aria-label="tabs" style="underline" borderPosition="bottom">
          <Tabs.Item title="Relevant">
            {posts.length > 0 &&
              posts.map((post) => <PostCard key={post._id} />)}
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
      {isLoading && <Spinner />}
    </div>
  );
};

export default Home;
