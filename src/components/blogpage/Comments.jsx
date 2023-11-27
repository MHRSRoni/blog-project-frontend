import React, { useEffect, useState } from 'react';
import { Textarea, Button } from "keep-react";

const generateDummyComments = (count) => {
  const dummyComments = [
    {
      id: 1,
      text: "Great post! I really enjoyed reading it.",
    },
    {
      id: 2,
      text: "Interesting insights. Thanks for sharing!",
    },
    {
      id: 3,
      text: "I completely agree with your points. Well written!",
    },
    {
      id: 4,
      text: "This topic is so relevant. Looking forward to more content from you.",
    },
    {
      id: 5,
      text: "Thanks for the valuable information. Keep up the good work!",
    },
  ];

  const newComments = [];

  for (let i = 1; i <= count; i++) {
    newComments.push({
      id: i + dummyComments.length,
      text: `Dummy Comment ${i}`,
    });
  }

  return [...dummyComments, ...newComments];
};

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const dummyComments = generateDummyComments(5);
        setComments(dummyComments);
      } catch (error) {
        console.error('Error fetching comments:', error.message);
      }
    };

    fetchComments();
  }, [postId]);

  const handleAddComment = () => {
    try {
      const dummyComment = {
        id: comments.length + 1,
        text: newComment,
      };

      setComments([...comments, dummyComment]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error.message);
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <React.Fragment key={comment.id}>
            <li>{comment.text}</li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
      <div className='flex-col gap-2'>
      <Textarea
        id="comment"
        placeholder="Leave a comment..."
        withBg={true}
        color="gray"
        border={true}
        rows={4}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="your-textarea-classes"
      />
      <Button
        onClick={handleAddComment}
        size="md"
        type="primary"
        className="your-button-classes"
      >
        Add Comment
      </Button>
    </div>
    </div>
  );
};

export default Comment;
