import { Card } from "keep-react";
import { CaretRight } from "phosphor-react";

const SearchCard = ({ picture, title, description, slug }) => {
  return (
    <Card className="p-4 mb-2">
      <Card
        className="overflow-hidden rounded-md"
        imgSrc={picture}
        imgSize="md"
      ></Card>
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description.substring(0, 150)}</Card.Description>
      <Card.Link
        href={slug}
        icon={<CaretRight size={16} color="#1B4DFF" />}
        iconPosition="left"
      >
        Learn More
      </Card.Link>
    </Card>
  );
};

export default SearchCard;
