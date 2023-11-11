import { Empty } from "keep-react";

const NoPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <Empty
        title="Oops! You seem to be lost"
        content="There is No content"
        buttonText="Go To Home Page"
        redirectBtnSize="xs"
        buttonType="default"
        redirectUrl="/"
        image={
          <img
            src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
            height={234}
            width={350}
            alt="404"
          />
        }
      />
    </div>
  );
};

export default NoPage;
