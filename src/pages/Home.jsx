import Card from "../components/Card/Card";
import PostCard from "../components/post/PostCard";

const Home = () => {
  return (
    <div className="container mx-auto  flex pt-3 ">
      <div className="left basis-4/12 lg:basis-3/12 h-screen">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="middle basis-8/12 lg:basis-6/12">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className="right hidden lg:block  lg:basis-3/12 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
