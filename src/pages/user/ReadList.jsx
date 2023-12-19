// import { Button } from "keep-react";
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "../../components/Spinner/Spinner";

// import ConfirmationModal from "../../components/Modal/ConfirmationModal";
// import { useState } from "react";
// import { updateReadListThunk } from "../../redux/readList/readListSlice";

// const ReadList = () => {
//   const dispatch = useDispatch();
//   const [show, setShow] = useState(false);
//   const [postId, setPostId] = useState("");
//   const { readList, isLoading } = useSelector((state) => state.readList);

//   const handleUpdateThunk = () => {
//     dispatch(updateReadListThunk(postId));
//   };

//   const handleShow = (postId) => {
//     setPostId(postId);
//     setShow(!show);
//   };

//   return (
//     <div className="container mx-auto p-3 h-screen overflow-auto">
//       {/* heading */}
//       <div className="flex justify-between items-center">
//         <h3 className="text-2xl font-bold">
//           Reading list (
//           {readList?.data.length > 0 ? readList?.data.length : "0"})
//         </h3>
//         <input
//           type="text"
//           placeholder="Search here..."
//           // value={searchTerm}
//           // onChange={handleSearch}
//           className="px-2 py-1 border border-gray-300 rounded-md"
//         />
//       </div>

//       {/* content */}

//       {readList?.data.length > 0
//         ? readList?.data.map((item, index) => (
//             <div key={index} className="p-5 flex justify-between items-center">
//               <a href={`/post/read?slug=${item.slug}`}>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-3">
//                     <img
//                       className="w-12 h-12 object-cover pb-2 pr-2 rounded-md"
//                       src={item.picture}
//                       alt={item.title}
//                     />
//                     <div>
//                       <h6>{item.title}</h6>
//                       <div className="flex">
//                         <p className="mr-4">{item.userName}</p>
//                         <p className="mr-4">
//                           {new Date(item.updatedAt).toDateString()}
//                         </p>
//                         <p>{item.readTime} minutes</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//               <Button
//                 size="xs"
//                 color="error"
//                 onClick={() => handleShow(item.postId)}
//               >
//                 Remove
//               </Button>
//             </div>
//           ))
//         : "NO Read List Found"}

//       {isLoading && <Spinner />}

//       <div>
//         <ConfirmationModal
//           show={show}
//           handleShow={handleShow}
//           action={handleUpdateThunk}
//         />
//       </div>
//     </div>
//   );
// };

// export default ReadList;



import { BookmarkSimple, CloudArrowUp } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { updateReadListThunk } from "../../redux/readList/readListSlice";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { successNotification } from "../../utilities/NotificationHelper";

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
            <CloudArrowUp size={28} color="#1B4DFF" />
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
              You are not logged in. Please login first.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-[#1B4DFF] text-white rounded-md"
              onClick={onClickModalCancel}
            >
              Close
            </button>
            <button
              className="mt-4 px-4 py-2 bg-[#1B4DFF] text-white rounded-md ml-2"
              onClick={onClickModalLogin}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadList;

