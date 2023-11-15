import { Card } from "keep-react";

const Contact = () => {
  return (
    <Card className="md:p-6 p-5 max-w-4xl h-screen mr-auto ml-auto mt-4 mb-4">
      <Card.Title className="text-6xl font-semibold">Contacts</Card.Title>
      <Card.Description className="text-xl font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        libero, exercitationem in consectetur amet quo vero velit, rem nisi quam
        sint ipsum maiores facere dolorum obcaecati quod, quidem eveniet
        debitis. Fugiat alias in deleniti magnam?
        <br />
        <br />
        Email: bongocoders@gmail.com
        <br />
        Phone: +88012345678
      </Card.Description>
    </Card>
  );
};

export default Contact;
