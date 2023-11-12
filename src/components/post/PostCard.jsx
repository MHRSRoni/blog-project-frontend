import { Card, Button } from "keep-react";
import { CaretRight } from "phosphor-react";

const PostCard = () => {
  return (
    <Card className="md:p-6 p-5 max-w-2xl items-center m-auto mt-6">
      <Card
        className="max-w-2xl overflow-hidden rounded-md"
        imgSrc="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075422/Person-Experiencing-Acidity-768x406.webp"
        imgSize="md"
      ></Card>

      <Card.Container>
        <h1>Blogger Profile</h1>
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
      <Card.Container>
        <Button type="outlinePrimary" width="10px">
          Like / Dislike
        </Button>
      </Card.Container>
    </Card>
  );
};

export default PostCard;
