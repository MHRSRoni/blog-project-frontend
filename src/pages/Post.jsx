
import { useEffect } from 'react';
import { Card } from 'keep-react';
import Spinner from '../components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { readSingleBlogThunk } from '../redux/singlePost/singlePostSlice';
import Comment from '../components/blogpage/Comments';



import { useLocation } from 'react-router-dom';

const Post = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, error } = useSelector((state) => state.readSingleBlog);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const slug = queryParams.get('slug');

  useEffect(() => {
    dispatch(readSingleBlogThunk(slug));
  }, [dispatch, slug]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        posts && (
          <Card className="md:p-6 p-5 max-w-2xl items-center m-auto mt-6">
            <>
              <Card
                className="max-w-2xl overflow-hidden rounded-md"
                imgSrc={posts.picture}
                imgSize="md"
              ></Card>

              <Card.Container>
                <h1>Blogger Profile</h1>
              </Card.Container>

              <Card.Title>{posts.title}</Card.Title>

              <Card.Container className="flex flex-row">
                <p>Category: {posts.categoryId}</p>
              </Card.Container>

              <Card.Description>{posts.description}</Card.Description>

              {/* Comment section */}
              <Comment postId={posts.id} />

            </>
          </Card>
        )
      )}
      {error && <p>Error fetching data: {error}</p>}
    </div>
  );
};

export default Post;
