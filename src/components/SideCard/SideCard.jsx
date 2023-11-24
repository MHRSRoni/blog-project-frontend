import SideList from "./SideList";

const SideCard = ({ cardTitle }) => {
  return (
    <div className="bg-white min-h-[200px] p-3 m-3 rounded-lg">
      <div className="p-2">
        <h3 className="text-2xl text-slate-950"># {cardTitle}</h3>
        <div>
          <hr className="my-2" />
          <SideList />
          <SideList />
          <SideList />
        </div>
      </div>
    </div>
  );
};

export default SideCard;
