import { useEffect } from "react";
import { Card } from "keep-react";
import Spinner from "../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { readSingleBlogThunk } from "../redux/singlePost/singlePostSlice";
import { BookmarkSimple, ThumbsUp } from "phosphor-react";

import { useLocation } from "react-router-dom";
import SideCard from "../components/SideCard/SideCard";
import SideList from "../components/SideCard/SideList";
import Calendar from "../components/Calendar/Calender";
import { SkeletonComponent } from "../components/Skeleton/SkeletonComponent";
import SocialShare from "../components/SocialShare/SocialShare";

const Post = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, error } = useSelector(
    (state) => state.readSingleBlog
  );

  // Get the location object from react-router
  const location = useLocation();

  // Get the slug from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const slug = queryParams.get("slug");
  console.log(queryParams);

  useEffect(() => {
    dispatch(readSingleBlogThunk(slug));
  }, [dispatch, slug]);

  return (
    <div className="container mx-auto  flex ">
      <div className="left basis-12/12 lg:basis-9/12 min-h-screen">
        {posts?.categoryId ? (
          <Card className="p-6 items-center m-auto mt-3">
            <>
              <img
                className="overflow-hidden rounded-md w-full h-52 md:h-[450px] object-cover"
                src={posts.picture}
              ></img>

              <Card.Container className="flex flex-row items-center justify-around">
                <button className="flex flex-row items-center text-md ml-2 rounded-md pr-4 pl-4 pt-2 pb-2 hover:bg-[#f5f5f5] ">
                  <ThumbsUp size={24} />
                  <span className="pl-2">{posts.react.like} likes</span>
                </button>
                <button className="ml-[-10] hover:bg-[#f5f5f5] pr-4 pl-4 pt-2 pb-2 rounded-md">
                  <span>Comments</span>
                </button>
                <Card.Description className="">
                  {posts.readTime} min read
                </Card.Description>
                <BookmarkSimple size={24} />
                <SocialShare />
              </Card.Container>

              <Card.Title>{posts.title}</Card.Title>

              <Card.Description>{posts.description}</Card.Description>
            </>
          </Card>
        ) : (
          <>
            <SkeletonComponent />
            <SkeletonComponent />
          </>
        )}
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
        </SideCard>
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Post;
