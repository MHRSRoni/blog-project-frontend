/* eslint-disable no-unsafe-optional-chaining */
import { Button } from "keep-react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import { useEffect, useState } from "react";
import { updateReadListThunk } from "../../redux/readList/readListSlice";
import banglaNumber from "../../utilities/banglaNumber";

const ReadList = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState("");
  const { readList, isLoading } = useSelector((state) => state.readList);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (readList) {
      setList([...readList?.data?.slice(0, 7)]);
    }
  }, [readList]);

  useEffect(() => {
    if (page) {
      setList([...readList?.data?.slice(0, page)]);
    }
  }, [page]);

  useEffect(() => {
    if (search !== null) {
      const data = readList?.data.filter((item) => {
        return search === "" ? true : item.title.includes(search);
      });

      setList(data.slice(0, 7));
    }
  }, [search]);

  const handleUpdateThunk = () => {
    dispatch(updateReadListThunk(postId));
  };

  const handleShow = (postId) => {
    setPostId(postId);
    setShow(!show);
  };

  const handleClick = () => {
    setPage((prev) => prev + 7);
    setSearch(null);
  };

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearch(input);
  };

  return (
    <div className="container mx-auto p-3 h-screen overflow-auto">
      {/* heading */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">
          Total Added (
          {readList?.data?.length > 0 ? readList?.data?.length : "0"})
        </h3>
        <input
          type="search"
          placeholder="Search here..."
          value={search}
          onChange={(e) => handleSearch(e)}
          className="px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>

      {/* content */}

      {list.length > 0
        ? list.map((item, index) => (
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
                        <p>{banglaNumber(item.readTime)} মিনিট</p>
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
                রিমুভ
              </Button>
            </div>
          ))
        : "NO Read List Found"}

      {/* loading btn */}
      <div className="flex justify-center" onClick={handleClick}>
        <span
          className={`${
            list?.length > 6 && readList?.data?.length > list.length
              ? ""
              : "hidden"
          } `}
        >
          <Button
            size="xs"
            type="primary"
            onClick={() => {
              setPage(page + 7);
            }}
          >
            আরো যুক্ত করুন
          </Button>
        </span>
      </div>

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
