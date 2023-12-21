import { useDispatch, useSelector } from "react-redux";
import { updateProfileThunk } from "../../redux/auth/authSlice";
import {
  errorNotification,
  successNotification,
} from "../../utilities/NotificationHelper";
import Spinner from "../../components/Spinner/Spinner";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utilities/SessionHelper";

const AddCategory = () => {
  const { all: category } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.auth);
  const interestCategory = user.data.interest;
  const loggedInUser = getLocalStorage("user");

  const handleFollow = (_id) => {
    const isExist = interestCategory.find((id) => id === _id);
    let interestList;
    if (!isExist) {
      interestList = [...interestCategory, _id];
    } else {
      interestList = interestCategory.filter((id) => id !== _id);
    }

    dispatch(
      updateProfileThunk({
        interest: interestList,
      })
    )
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          setLocalStorage("user", { ...loggedInUser, data: res.data.data });

          successNotification("successfully added category");
        }
      })
      .catch(() => {
        errorNotification("something went wrong");
      });
  };

  return (
    <div className="container mx-auto pt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.map((data) => (
          <CategoryListItem
            interestCategory={interestCategory}
            key={data._id}
            {...data}
            handleFollow={handleFollow}
          />
        ))}
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

const CategoryListItem = ({
  description,
  title,
  _id,
  handleFollow,
  interestCategory,
  postCount,
}) => {
  const isExist = interestCategory.find((id) => id === _id);

  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between ">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-bold">
            <span># </span>
            {title}
          </h2>
          <h1 className="text-[12px]"> {postCount} পোস্ট </h1>
        </div>

        <p className="text-gray-900 text-sm">{description.slice(0, 100)}...</p>
      </div>

      <div className="mt-6 flex gap-2 justify-between">
        <button
          disabled={isExist ? true : false}
          className={` ${
            isExist ? " bg-slate-300" : "bg-primary-600"
          } text-white w-32 font-xl py-1 px-4  rounded`}
          onClick={() => handleFollow(_id)}
        >
          ফলো
        </button>
        <button
          disabled={isExist ? false : true}
          className={` ${
            isExist ? "bg-primary-600" : "bg-slate-300"
          } text-white w-32 font-xl py-1 px-4  rounded`}
          onClick={() => handleFollow(_id)}
        >
          আনফলো
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
