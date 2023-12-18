import Category from "../components/Category/Category";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);
  const [categoryName, setcategoryName] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://health-plus-q4tt.onrender.com/api/v1/post/read/?category=${categoryId}`
      );
      const categoryData = response.data.data.resultPosts;
      // console.log(categoryData);
      const catName = response.data.data.categoryName;
      setcategoryName(catName);

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
      <div className="relative w-full h-48 flex items-center justify-center mb-4">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg")',
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <h1 className="relative z-10 text-white text-8xl">{categoryName}</h1>
      </div>

      <div className="container mx-auto">
        <div className="w-full">
          <p className="text-md mb-4">
            {categoryName} : সম্পর্কিত যাবতীয় লেখালেখি প্রবন্ধ টিপস
          </p>
          <div className="search-card-grid">
            {category.map((categoryItem, index) => (
              <Category
                key={index}
                picture={categoryItem.picture}
                title={categoryItem.title}
                description={categoryItem.description}
                slug={categoryItem.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
