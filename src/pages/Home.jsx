import { Button, Tabs } from "keep-react";
import PostCard from "../components/post/PostCard";
import Calendar from "../components/Calendar/Calender";
import { SideBar } from "../components/NavBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMorePostThunk, getPostThunk } from "../redux/post/postSlice";
import Spinner from "../components/Spinner/Spinner";
import { SkeletonComponent } from "../components/Skeleton/SkeletonComponent";
import SideCard from "../components/SideCard/SideCard";
import { SpinnerButtonComponent } from "../components/SpinnerButtonComponent/SpinnerButtonComponent";
import SideList from "../components/SideCard/SideList";
import { NotificationModal } from "../components/Modal/NotificationModal";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const [showModal, setShowModal] = useState(false);
  const [inLineLoading, setInLineLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("relevant");

  const handleTabChange = (e) => {
    if (e === 0) {
      setPage(1);
      setSort("relevant");
    }
    if (e === 1) {
      setPage(1);
      setSort("latest");
    }
    if (e === 2) {
      setPage(1);
      setSort("top");
    }
  };

  useEffect(() => {
    if (error === "Interest not found!") {
      setShowModal(true);
    }
  }, [error]);

  useEffect(() => {
    dispatch(getPostThunk({ page, sort }));
  }, [sort]);

  useEffect(() => {
    if (page > 1) {
      dispatch(getMorePostThunk({ page, sort }));
    }
  }, [page]);

  useEffect(() => {
    if (posts?.resultPosts?.length > 6) {
      setInLineLoading(false);
    }
  }, [posts]);

  return (
    <div className="container mx-auto  flex pt-3 ">
      <div className="left hidden lg:block lg:basis-2/12 h-screen ">
        <SideBar />
      </div>
      <div className="middle basis-12/12 lg:basis-7/12">
        <Tabs
          aria-label="tabs"
          style="underline"
          borderPosition="bottom"
          onActiveTabChange={handleTabChange}
        >
          <Tabs.Item title="Relevant">
            {posts?.resultPosts?.length > 1 ? (
              posts?.resultPosts.map((item) => (
                <PostCard key={item._id} item={item} />
              ))
            ) : (
              <>
                <SkeletonComponent /> <SkeletonComponent />{" "}
                <SkeletonComponent />
              </>
            )}

            {/* loading button */}
            {posts.totalPost > posts?.resultPosts?.length && (
              <div className="flex justify-center items-center m-8">
                {inLineLoading ? (
                  <SpinnerButtonComponent />
                ) : (
                  <Button
                    style={{ padding: "0 1rem" }}
                    size="xs"
                    type="primary"
                    onClick={() => {
                      setInLineLoading(true);
                      setPage(page + 1);
                    }}
                  >
                    Load More
                  </Button>
                )}
              </div>
            )}
          </Tabs.Item>
          <Tabs.Item title="Latest">
            {posts?.resultPosts?.length > 1 ? (
              posts?.resultPosts.map((item) => (
                <PostCard key={item._id} item={item} />
              ))
            ) : (
              <>
                <SkeletonComponent /> <SkeletonComponent />{" "}
                <SkeletonComponent />
              </>
            )}

            {/* loading button */}
            {posts.totalPost > posts?.resultPosts?.length && (
              <div className="flex justify-center items-center">
                {inLineLoading ? (
                  <SpinnerButtonComponent />
                ) : (
                  <Button
                    size="xs"
                    type="primary"
                    onClick={() => {
                      setInLineLoading(true);
                      setPage(page + 1);
                    }}
                  >
                    Load More
                  </Button>
                )}
              </div>
            )}
          </Tabs.Item>
          <Tabs.Item title="Top">
            {posts?.resultPosts?.length > 1 ? (
              posts?.resultPosts.map((item) => (
                <PostCard key={item._id} item={item} />
              ))
            ) : (
              <>
                <SkeletonComponent /> <SkeletonComponent />{" "}
                <SkeletonComponent />
              </>
            )}

            {/* loading button */}
            {posts.totalPost > posts?.resultPosts?.length && (
              <div className="flex justify-center items-center">
                {inLineLoading ? (
                  <SpinnerButtonComponent />
                ) : (
                  <Button
                    size="xs"
                    type="primary"
                    onClick={() => {
                      setInLineLoading(true);
                      setPage(page + 1);
                    }}
                  >
                    Load More
                  </Button>
                )}
              </div>
            )}
          </Tabs.Item>
        </Tabs>
      </div>
      <div className="right hidden lg:block  lg:basis-3/12 ">
        <SideCard cardTitle="সাম্প্রতিক পোস্ট ">
          <hr className="my-2" />
          <SideList />
          <SideList />
          <SideList />
        </SideCard>
        <SideCard cardTitle="ক্যালেন্ডার">
          <Calendar />
        </SideCard >

        <SideCard cardTitle="যোগাযোগ">
          <Contact />
        </SideCard>
      </div>
      {isLoading && <Spinner />}
      {showModal && (
        <NotificationModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Home;
