import { Button } from "keep-react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import { useState } from "react";
import { updateReadListThunk } from "../../redux/readList/readListSlice";

const ReadList = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState("");
  const { readList, isLoading } = useSelector((state) => state.readList);

  const handleUpdateThunk = () => {
    dispatch(updateReadListThunk(postId));
  };

  const handleShow = (postId) => {
    setPostId(postId);
    setShow(!show);
  };

  return (
    <div className="container mx-auto p-3 h-screen overflow-auto">
      {/* heading */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">
          Read list (
          {readList?.data.length > 0 ? readList?.data.length : "0"})
        </h3>
        <input
          type="text"
          placeholder="Search here..."
          // value={searchTerm}
          // onChange={handleSearch}
          className="px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>

      {/* content */}

      {readList?.data.length > 0
        ? readList?.data.map((item, index) => (
            <div key={index} className="p-5 flex justify-between items-center">
              <a href={`/post/read?slug=${item.slug}`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 object-cover pb-2 pr-2 rounded-md"
                      src={item.picture}
                      alt={item.title}
                    />
                    <div>
                      <h6>{item.title}</h6>
                      <div className="flex">
                        <p className="mr-4">{item.userName}</p>
                        <p className="mr-4">
                          {new Date(item.updatedAt).toDateString()}
                        </p>
                        <p>{item.readTime} minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <Button
                size="xs"
                color="error"
                onClick={() => handleShow(item.postId)}
              >
                Remove
              </Button>
            </div>
          ))
        : "NO Read List Found"}

      {isLoading && <Spinner />}

      <div>
        <ConfirmationModal
          show={show}
          handleShow={handleShow}
          action={handleUpdateThunk}
        />
      </div>
    </div>
  );
};

export default ReadList;
