import { BookmarkSimple } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { updateReadListThunk } from "../../redux/readList/readListSlice";
import { successNotification } from "../../utilities/NotificationHelper";

const ReadList = ({ postId }) => {
  const dispatch = useDispatch();
  const { readList } = useSelector((state) => state.readList);
  const { user } = useSelector((state) => state.auth);
  const isBooked = readList?.data.find((item) => item.postId === postId);

  const handleReadList = () => {
    if (user?.data && user?.token) {
      dispatch(updateReadListThunk(postId))
        .unwrap()
        .then(() => {
          successNotification("আপনার কাজ সফল হয়েছে ");
        });
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
