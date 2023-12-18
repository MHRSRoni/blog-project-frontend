import { Avatar, Card } from "keep-react";
import { CaretRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import ReadList from "../ReadList/ReadList";
import Like from "../Like/Like";

const PostCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Card className="p-4 my-3">
      <Card
        className="overflow-hidden rounded-md"
        imgSrc={item?.picture}
        imgSize="md"
      ></Card>

      <Card.Container className="flex items-center">
        <Avatar size="lg" shape="circle" img={item?.userId?.picture} />
        <Card.Container className="ml-3">
          <Card.Title className="md:text-base text-sm font-semibold text-slate-800">
            {item?.userId?.name}
          </Card.Title>
          <Card.Title className="text-xs md:font-medium  font-normal text-slate-400">
            {new Date(item.createdAt).toDateString()}
          </Card.Title>
        </Card.Container>
      </Card.Container>

      <Card.Title>{item.title}</Card.Title>

      <Card.Description>{item.description.slice(0, 300)}</Card.Description>
      <button
        onClick={() => navigate(`/post/read?slug=${item.slug}`)}
        style={{ color: "#1B4DFF" }}
        className="text-primary font-semibold flex items-center"
      >
        Read More
        <CaretRight size={16} className="ml-2" />
      </button>

      <Card.Container className="flex flex-row items-center justify-between">
        <Like react={item.react} postId={item._id} sliceType="postSlice" />
        <button className="ml-[-10] hover:bg-[#f5f5f5] pr-4 pl-4 pt-2 pb-2 rounded-md">
          <span>Comments</span>
        </button>
        <Card.Description className="">
          {item.readTime} min read
        </Card.Description>
        <ReadList postId={item._id} />
      </Card.Container>
    </Card>
  );
};

export default PostCard;
