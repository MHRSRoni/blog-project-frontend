import { useEffect } from 'react';
import { Card } from 'keep-react';
import { useDispatch, useSelector } from 'react-redux';
import { readSingleBlogThunk } from '../redux/post/postSlice';
import Spinner from '../components/Spinner/Spinner';

const Post = () => {
  const { isLoading, singlePost, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to fetch the single blog post
    dispatch(readSingleBlogThunk());
  }, [dispatch]);

  // Log or inspect the data
  useEffect(() => {
    if (singlePost) {
      console.log('Received data:', singlePost);
    }

    if (error) {
      console.error('Error fetching data:', error);
    }
  }, [singlePost, error]);


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
              {singlePost.userId.name ? (
                <h1>Author : {singlePost.userId.name}</h1>
              ) : (
                <h1>Blogger Profile</h1>
              )}
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
