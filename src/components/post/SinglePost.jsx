import { Card } from "keep-react";

const SinglePost = () => {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nesciunt
        debitis ea neque autem, sunt exercitationem voluptatem fuga at aperiam
        ex eveniet velit unde labore qui quidem eligendi magnam ullam earum
        deleniti distinctio in cumque repudiandae inventore. Molestias facilis
        molestiae voluptas. Nihil distinctio illum temporibus nisi cupiditate,
        autem maxime hic aspernatur iste amet eum quas vel atque error repellat.
        Ipsam voluptatibus natus, dolores nulla, temporibus saepe a itaque illum
        necessitatibus repellat qui ipsum quaerat quisquam nihil reprehenderit
        sit, corrupti quia delectus. Explicabo repudiandae dolorem soluta,
        aspernatur quidem veniam perferendis, natus est asperiores, architecto
        velit minus voluptatem. Culpa quis ut suscipit voluptatum reprehenderit
        molestiae doloremque ab laboriosam ipsum expedita. Reiciendis
        praesentium rem commodi deleniti magnam reprehenderit amet consequatur,
        vitae quas, inventore autem distinctio saepe nisi maxime, sequi facere.
        Deleniti, ex quaerat? Quae nesciunt alias sint soluta autem sequi
        doloremque nihil cum quos tenetur? Beatae debitis deserunt autem
        aspernatur saepe facere doloremque? Exercitationem nemo at eius aliquid
        ducimus magni velit nisi maiores porro necessitatibus, cupiditate
        mollitia quae repellendus autem provident! In, magni libero dolorum nam
        similique beatae, esse eum voluptatibus cum cumque suscipit tempore?
        Provident molestias consequuntur ipsum, nobis delectus ex assumenda,
        quia doloremque itaque nemo dolor atque quam, pariatur suscipit
        incidunt.
      </Card.Description>
    </Card>
  );
};

export default SinglePost;
