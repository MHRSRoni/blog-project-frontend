import { Card } from "keep-react";

const About = () => {
  return (
    <Card className="md:p-6 p-5 max-w-4xl items-center m-auto mt-4 mb-4">
      <Card.Title className="text-6xl font-semibold">About us</Card.Title>
      <Card.Description className="text-xl font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        consequatur molestiae suscipit magnam cum ea laboriosam sit. Expedita ad
        perferendis quis corporis unde numquam error dolor cupiditate id
        voluptate. Nesciunt hic, aspernatur corporis sed eaque nulla dolor
        nostrum vel! Illum repellendus voluptates, dolorem saepe in excepturi
        ipsa expedita, esse perspiciatis molestias aperiam facere fugit
        laboriosam quibusdam sit, itaque velit cumque nam placeat adipisci.
        Repellat et ea hic illo veritatis deserunt officiis dolor, mollitia
        tenetur enim labore nobis earum accusamus facilis debitis cumque
        voluptate commodi ipsa sit amet incidunt quidem dolorum natus! Officia
        dolores placeat sit quidem ut itaque. Reiciendis, iusto.
      </Card.Description>
      <Card.Title className="text-6xl font-semibold">Team</Card.Title>
      <Card.Description className="text-xl font-normal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem dicta
        ipsam, porro placeat, non doloribus fugiat dignissimos debitis omnis,
        sit excepturi fugit et reprehenderit ipsa.
      </Card.Description>
      <Card
        className="w-full overflow-hidden rounded-md"
        imgSrc="https://res.cloudinary.com/practicaldev/image/fetch/s--QmM9l7t1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://i.imgur.com/d6ZM27K.jpg"
        imgSize="full"
      ></Card>
      <Card.Description className="text-xl font-normal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem dicta
        ipsam, porro placeat, non doloribus fugiat dignissimos debitis omnis,
        sit excepturi fugit et reprehenderit ipsa.
      </Card.Description>
    </Card>
  );
};

export default About;
