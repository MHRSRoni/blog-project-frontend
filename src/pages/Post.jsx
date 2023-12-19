import { useEffect } from "react";
import { Card } from "keep-react";
import Spinner from "../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  readSingleBlogThunk,
  resetSingleBlogState,
} from "../redux/singlePost/singlePostSlice";

import { useLocation } from "react-router-dom";
import SideCard from "../components/SideCard/SideCard";
import Calendar from "../components/Calendar/Calender";
import { SkeletonComponent } from "../components/Skeleton/SkeletonComponent";
import SocialShare from "../components/SocialShare/SocialShare";
import CommentBox from "../components/CommentBox/CommentBox";
import RelatedPosts from "../components/SideCard/RelatedPosts";
import ReadList from "../components/ReadList/ReadList";
import Like from "../components/Like/Like";
import banglaNumber from "../utilities/banglaNumber";

const Post = () => {
  const { isLoading, post } = useSelector((state) => state.readSingleBlog);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  
  const location = useLocation();
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
                <Like
                  react={post.react}
                  postId={post._id}
                  sliceType="readSingleBlogSlice"
                />

                <Card.Description className="">
                  {banglaNumber(post.readTime)} মিনিট
                </Card.Description>
                <ReadList postId={post._id} />
                <SocialShare slug={slug} />
              </Card.Container>

              <Card.Title>{post.title}</Card.Title>

              <Card.Description>
                <div
                  style={{
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {post.description}
                </div>
              </Card.Description>
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
        <SideCard cardTitle="সম্পর্কিত পোস্ট">
          <hr className="my-2" />
          <RelatedPosts categoryId={post?.categoryId?._id} postId={post._id} />
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
