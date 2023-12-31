

import { BookmarkSimple } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { updateReadListThunk } from "../../redux/readList/readListSlice";
import { successNotification } from "../../utilities/NotificationHelper";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const ReadList = ({ postId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { readList } = useSelector((state) => state.readList);
  const { user } = useSelector((state) => state.auth);
  const isBooked = readList?.data.find((item) => item.postId === postId);

  const [showModal, setShowModal] = useState(false);

  const handleReadList = () => {
    if (user?.data && user?.token) {
      dispatch(updateReadListThunk(postId))
        .unwrap()
        .then(() => {
          successNotification("আপনার কাজ সফল হয়েছে ");
        });
    } else {
      setShowModal(true);
    }
  };

  const onClickModalCancel = () => {
    setShowModal(false);
  };

  const onClickModalLogin = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <div className="cursor-pointer" onClick={handleReadList}>
        <BookmarkSimple size={24} style={{ color: `${isBooked ? "red" : ""}` }} />
      </div>

      {/* Modal Code */}
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="flex fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="bg-white w-96 p-4 rounded-md z-10">
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
            আপনি লগইন করা হয়নি। অনুগ্রহ করে প্রথমে লগইন করুন।
            </p>
            <button
              className="mt-4 px-4 py-2 border border-[#1B4DFF] text-black rounded-md"
              onClick={onClickModalCancel}
            >
              বন্ধ করুন
            </button>
            <button
              className="mt-4 px-4 py-2 bg-[#1B4DFF] text-white rounded-md ml-2"
              onClick={onClickModalLogin}
            >
              লগইন
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadList;
