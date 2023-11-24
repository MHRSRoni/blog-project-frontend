const SideList = () => {
  return (
    <div className="py-2">
      <a href="#">
        <div className="flex gap-3">
          <img
            className="w-20 h-20 object-cover rounded-md"
            src="https://www.shajgoj.com/wp-content/uploads/2020/10/YouTube2-768x473.jpg"
            alt=""
          />

          <div>
            <h1 className="pb-2 hover:font-medium">লিউকোরিয়া কেন হয়, করণীয়</h1>
            <p className="hover:font-medium">
              স্কিনের বিভিন্ন সমস্যার জন্য বিভিন্ন প্রোডাক্টে ব্যবহার হচ্ছে
              নিয়াসিনামাইড।
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SideList;
