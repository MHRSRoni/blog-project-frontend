"use client";
import { Sidebar } from "keep-react";
import { House, Folders, CircleNotch } from "phosphor-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryThunk, loadMore } from "../../redux/category/categorySlice";

export const SideBar = () => {
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  // load category
  useEffect(() => {
    dispatch(getCategoryThunk());
  }, [dispatch]);

  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item className="cursor-pointer" icon={<House size={24} />}>
            হোম
          </Sidebar.Item>
          {category.map((item) => (
            <Sidebar.Item
              className="cursor-pointer"
              key={item._id}
              icon={<Folders size={24} />}
            >
              {item.title}
            </Sidebar.Item>
          ))}

          {category.length <= 7 && (
            <Sidebar.Item
              onClick={() => dispatch(loadMore())}
              className="cursor-pointer"
              icon={<CircleNotch size={24} />}
            >
              আরও দেখুন
            </Sidebar.Item>
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
