import { Tabs } from "keep-react";
import PostCard from "../components/post/PostCard";
/* import Button from "../components/viewBlog"; */
import { SideBar } from "../components/NavBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostThunk } from "../redux/post/postSlice";
import Spinner from "../components/Spinner/Spinner";
import { SkeletonComponent } from "../components/Skeleton/SkeletonComponent";
import SideCard from "../components/SideCard/SideCard";
import Calendar from "../components/SideCard/Calender";

const Home = () => {

  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const handleTabChange = (e) => {
    if (e === 0) {
      dispatch(getPostThunk({ page: 1, sort: "relevant" }));
    }
    if (e === 1) {
      dispatch(getPostThunk({ page: 1, sort: "latest" }));
    }
    if (e === 2) {
      dispatch(getPostThunk({ page: 1, sort: "top" }));
    }
  };

  useEffect(() => {
    dispatch(getPostThunk({ page: 1, sort: "relevant" }));
  }, []);

  return (
    <div className="container mx-auto  flex pt-3 ">
      <div className="left hidden lg:block lg:basis-2/12 h-screen ">
        <SideBar />
        <Button />

        
      </div>
      <div className="middle basis-12/12 lg:basis-7/12">
        <Tabs
          aria-label="tabs"
          style="underline"
          borderPosition="bottom"
          onActiveTabChange={handleTabChange}
        >
          <Tabs.Item title="Relevant">
            {posts?.data?.resultPosts.length > 1 ? (
              posts?.data?.resultPosts.map((item) => (
                <PostCard key={item._id} item={item} />
              ))
            ) : (
              <>
                <SkeletonComponent /> <SkeletonComponent />{" "}
                <SkeletonComponent />
              </>
            )}
          </Tabs.Item>
          <Tabs.Item title="Latest">
            {posts?.data?.resultPosts.length > 1 ? (
              posts?.data?.resultPosts.map((item) => (
                <PostCard key={item._id} item={item} />
              ))
            ) : (
              <>
                <SkeletonComponent /> <SkeletonComponent />{" "}
                <SkeletonComponent />
              </>
            )}
          </Tabs.Item>
          <Tabs.Item title="Top">
            {posts?.data?.resultPosts.length > 1 ? (
              posts?.data?.resultPosts.map((item) => (
                <PostCard key={item._id} item={item} />
              ))
            ) : (
              <>
                <SkeletonComponent /> <SkeletonComponent />{" "}
                <SkeletonComponent />
              </>
            )}
          </Tabs.Item>
        </Tabs>
      </div>
      <div className="right hidden lg:block  lg:basis-3/12 ">
        <SideCard cardTitle="discussion one" />

        <Calendar />
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Home;
