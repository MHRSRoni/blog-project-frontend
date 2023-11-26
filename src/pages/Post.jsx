import { useEffect } from "react";
import { Card } from "keep-react";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";

import { useParams } from "react-router-dom";

const Post = () => {
  const { isLoading, singlePost, error } = useSelector((state) => state.post);
  const { slugData } = useParams();
  // const dispatch = useDispatch();
  console.log("BlogPage component is rendered" + slugData);

  // useEffect(() => {
  //   // Dispatch the action to fetch the single blog post
  //   dispatch(readSingleBlogThunk("hello-world-again"));
  // }, [dispatch]);

  useEffect(() => {
    // Log or handle the error here
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [error]);

  return (
    <div>
      <Card className="md:p-6 p-5 max-w-2xl items-center m-auto mt-6">
        {singlePost && (
          <>
            <Card
              className="max-w-2xl overflow-hidden rounded-md"
              imgSrc={singlePost.picture} // Assuming there's an 'image' property in your fetched data
              imgSize="md"
            ></Card>

            <Card.Container>
              {/* {singlePost.userId.name ? (
                <h1>Author : {singlePost.name}</h1>
              ) : (
                <h1>Blogger Profile</h1>
              )} */}
              <h1>Blogger Profile</h1>
            </Card.Container>

            <Card.Title>{singlePost.title}</Card.Title>

            <Card.Container className="flex flex-row">
              <p>Category: {singlePost.categoryId}</p>
            </Card.Container>

            <Card.Description>{singlePost.description}</Card.Description>
          </>
        )}
      </Card>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Post;
