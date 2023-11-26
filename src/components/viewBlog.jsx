// ButtonComponent.js
import { Link } from "react-router-dom";

const ButtonComponent = () => {
  const slugData = "hello-world-again"; // Replace with the actual slug data

  return (
    <Link to={`/post/read?slug=${slugData}`}>
      <button>View Blog Post</button>
    </Link>
  );
};

export default ButtonComponent;
