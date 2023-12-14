import { useEffect } from "react";
import { Card } from "keep-react";
import Spinner from "../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  readSingleBlogThunk,
  resetSingleBlogState,
} from "../redux/singlePost/singlePostSlice";
import { BookmarkSimple, ThumbsUp } from "phosphor-react";

import { useLocation } from "react-router-dom";
import SideCard from "../components/SideCard/SideCard";
import Calendar from "../components/Calendar/Calender";
import { SkeletonComponent } from "../components/Skeleton/SkeletonComponent";
import SocialShare from "../components/SocialShare/SocialShare";
import CommentBox from "../components/CommentBox/CommentBox";
import RelatedPosts from "../components/SideCard/RelatedPosts";

const Post = () => {
  const { isLoading, post } = useSelector((state) => state.readSingleBlog);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Get the location object from react-router
  const location = useLocation();
  // Get the slug from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const slug = queryParams.get("slug");

  useEffect(() => {
    dispatch(readSingleBlogThunk(slug));
    return () => dispatch(resetSingleBlogState());
  }, [dispatch, slug]);

 

  return (
    <div className="container mx-auto  flex ">
      <div className="left basis-12/12 lg:basis-9/12 min-h-screen">
        {post?.categoryId ? (
          <Card className="p-6 items-center m-auto mt-3">
            <>
              <img
                className="overflow-hidden rounded-md w-full h-52 md:h-[450px] object-cover"
                src={post?.picture}
              ></img>

              <Card.Container className="flex flex-row items-center justify-around">
                <button className="flex flex-row items-center text-md ml-2 rounded-md pr-4 pl-4 pt-2 pb-2 hover:bg-[#f5f5f5] ">
                  <ThumbsUp size={24} />
                  <span className="pl-2">{post.react.like} likes</span>
                </button>
                <button className="ml-[-10] hover:bg-[#f5f5f5] pr-4 pl-4 pt-2 pb-2 rounded-md">
                  <span>Comments</span>
                </button>
                <Card.Description className="">
                  {post.readTime} min read
                </Card.Description>
                <BookmarkSimple size={24} />
                <SocialShare slug={slug} />
              </Card.Container>

              <Card.Title>{post.title}</Card.Title>

              <Card.Description>{post.description}</Card.Description>
            </>

            <CommentBox post={post} loggedInUserPhoto={user?.data?.picture} />
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
          <RelatedPosts categoryId={post.categoryId} />
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
