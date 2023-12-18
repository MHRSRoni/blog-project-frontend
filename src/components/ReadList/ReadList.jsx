import { BookmarkSimple } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { updateReadListThunk } from "../../redux/readList/readListSlice";

const ReadList = ({ postId }) => {
  const dispatch = useDispatch();
  const { readList } = useSelector((state) => state.readList);
  const { user } = useSelector((state) => state.auth);
  const isBooked = readList?.data.find((item) => item.postId === postId);

  const handleReadList = () => {
    if (user?.data && user?.token) {
      dispatch(updateReadListThunk(postId));
    } else {
      alert("please login first");
    }
  };

  return (
    <div className="cursor-pointer" onClick={handleReadList}>
      <BookmarkSimple size={24} style={{ color: `${isBooked ? "red" : ""}` }} />
    </div>
  );
};

export default ReadList;
