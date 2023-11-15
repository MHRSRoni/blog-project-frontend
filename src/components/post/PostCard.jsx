import { Avatar, Card } from "keep-react";
import { BookmarkSimple, ThumbsUp, CaretRight } from "phosphor-react";

const PostCard = () => {
  return (
    <Card className="p-4 my-3">
      <Card
        className="overflow-hidden rounded-md"
        imgSrc="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075422/Person-Experiencing-Acidity-768x406.webp"
        imgSize="md"
      ></Card>

      <Card.Container className="flex items-center">
        <Avatar
          size="lg"
          shape="circle"
          img="https://randomuser.me/api/portraits/men/11.jpg"
        />
        <Card.Container className="ml-3">
          <Card.Title className="md:text-base text-sm font-semibold text-slate-800">
            Md Ariful Islam
          </Card.Title>
          <Card.Title className="text-xs md:font-medium  font-normal text-slate-400">
            12 Nov
          </Card.Title>
        </Card.Container>
      </Card.Container>

      <Card.Title>Acidity Problems? 14 Home Remedies That Can Help</Card.Title>
      <Card.Container className="flex flex-row">
        <p className="mr-4">#Health </p>
        <p className="mr-4">#Health </p>
        <p className="mr-4">#Health </p>
      </Card.Container>

      <Card.Description>
        Acid Reflux, commonly known as Acidity is a condition in which bile or
        stomach acids flow back into our oesophagus or food pipe and cause
        irritation. This results in a burning sensation in our chest which is
        the commonest symptom of acidity.
      </Card.Description>
      <Card.Link
        href="/"
        icon={<CaretRight size={16} color="#1B4DFF" />}
        iconPosition="left"
      >
        Learn More
      </Card.Link>
      <Card.Container className="flex flex-row items-center justify-between">
        <button className="flex flex-row items-center text-md ml-2 rounded-md pr-4 pl-4 pt-2 pb-2 hover:bg-[#f5f5f5] ">
          <ThumbsUp size={24} />
          <span className="pl-2">50 likes</span>
        </button>
        <button className="ml-[-10] hover:bg-[#f5f5f5] pr-4 pl-4 pt-2 pb-2 rounded-md">
          <span>Comments</span>
        </button>
        <Card.Description className="">7 min read</Card.Description>
        <BookmarkSimple size={24} />
      </Card.Container>
    </Card>
  );
};

export default PostCard;
