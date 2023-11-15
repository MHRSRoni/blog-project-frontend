const Spinner = () => {
  return (
    <div
      className="h-screen w-full absolute top-0 left-0 flex justify-center items-center"
      style={{ backgroundColor: "#ffffff63" }}
    >
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
