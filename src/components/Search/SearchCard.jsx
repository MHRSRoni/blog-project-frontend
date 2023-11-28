import { Card } from "keep-react";
import { CaretRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ picture, title, description, slug }) => {
  const navigate = useNavigate();

  return (
    <Card className="p-4 mb-2">
      <Card
        className="overflow-hidden rounded-md"
        imgSrc={picture}
        imgSize="md"
      ></Card>
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description.substring(0, 150)}</Card.Description>
      <button
        onClick={() => navigate(`/post/read?slug=${slug}`)}
        style={{ color: "#1B4DFF" }}
        className="text-primary font-semibold flex items-center"
      >
        আরোও পড়ুন
        <CaretRight size={16} className="ml-2" />
      </button>
    </Card>
  );
};

export default SearchCard;
