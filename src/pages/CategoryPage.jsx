import Category from "../components/Category/Category";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://health-plus-q4tt.onrender.com/api/v1/post/read/?category=${categoryId}`
      );
      const categoryData = response.data.data.resultPosts;
      console.log(categoryData);

      if (Array.isArray(categoryData)) {
        setCategory(categoryData);
      } else {
        console.error("Category data is not an array:", categoryData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div>
      <div className="bg-black w-full h-36 flex items-center justify-center mb-4">
        <h1 className="text-white text-6xl">Category name</h1>
      </div>

      <div className="container mx-auto">
        <div className="w-full">
          <p className="text-md mb-4">
            Category name সম্পর্কিত যাবতীয় লেখালেখি প্রবন্ধ টিপস
          </p>
          <div className="search-card-grid">
            {category.map((categoryItem, index) => (
              <Category
                key={index}
                picture={categoryItem.picture}
                title={categoryItem.title}
                description={categoryItem.description}
                slug={`/post/?${categoryItem.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
