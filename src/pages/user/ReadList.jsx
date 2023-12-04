import { Avatar, Button } from "keep-react";
import Search from "../../components/Search/Search";
import { MagnifyingGlass } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const ReadList = () => {

  const navigate = useNavigate();


  return (
    <div className="container mx-auto p-3 h-screen overflow-auto">
      {/* heading */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Reading list (5)</h3>
        <form>
          <Search
            Icon={MagnifyingGlass}
            placeholder="Search anything"
            style={{ width: "200px" }}
            iconPosition="right"
          />
        </form>
      </div>
      {/* content */}
      <div className="p-5">
        {/* Element 1 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              size="md"
              img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <div>
              <h6
                className="text-xl font-medium cursor-pointer"
                onClick={() => navigate(`/post/read?slug=যে-৭-টি-খাবার-পুরুষের-টেস্টোস্টেরন-হরমোনকে-প্রাকৃতিকভাবে-বৃদ্ধি-করবে`)}
              >
                যে ৭ টি খাবার পুরুষের টেস্টোস্টেরন হরমোনকে প্রাকৃতিকভাবে বৃদ্ধি করবে
              </h6>
              <div className="flex">
                <p>Bentil Shadrack</p>.
                <span>Oct 21 22</span>.
                <span> 5 min read</span>
              </div>
            </div>
          </div>
          <Button size="xs" color="error">
            Remove
          </Button>
        </div>
  
        {/* Element 2 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              size="md"
              img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <div>
              <h6
                className="text-xl font-medium cursor-pointer"
                onClick={() => navigate(`/post/read?slug=শিশুর-প্রস্রাবে-ইনফেকশন-ডা.-মিজানুর-রহমান-কল্লোল`)}
              >
                শিশুর প্রস্রাবে ইনফেকশন-ডা. মিজানুর রহমান কল্লোল
              </h6>
              <div className="flex">
                <p>Bentil Shadrack</p>.
                <span>Oct 21 22</span>.
                <span> 5 min read</span>
              </div>
            </div>
          </div>
          <Button size="xs" color="error">
            Remove
          </Button>
        </div>
  
        {/* Element 3 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              size="md"
              img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <div>
              <h6
                className="text-xl font-medium cursor-pointer"
                onClick={() => navigate(`/post/read?slug=ফ্যাশান-সচেতন-ছেলেদের-যেসব-বিষয়-জানা-জরুরি!`)}
              >
               ফ্যাশান সচেতন ছেলেদের যেসব বিষয় জানা জরুরি!
              </h6>
              <div className="flex">
                <p>Bentil Shadrack</p>.
                <span>Oct 21 22</span>.
                <span> 5 min read</span>
              </div>
            </div>
          </div>
          <Button size="xs" color="error">
            Remove
          </Button>
        </div>
  
        {/* Element 4 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              size="md"
              img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <div>
              <h6
                className="text-xl font-medium cursor-pointer"
                onClick={() => navigate(`/post/read?slug=জীবনে-উন্নতি-করতে-হলে-রাতে-যা-করবেন-এবং-জীবনে-সফল-হওয়ার-১৭টি-উপায়!`)}
              >
                জীবনে উন্নতি করতে হলে রাতে যা করবেন এবং জীবনে সফল হওয়ার ১৭টি উপায়!
              </h6>
              <div className="flex">
                <p>Bentil Shadrack</p>.
                <span>Oct 21 22</span>.
                <span> 5 min read</span>
              </div>
            </div>
          </div>
          <Button size="xs" color="error">
            Remove
          </Button>
        </div>
  
        {/* Element 5 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              size="md"
              img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <div>
              <h6
                className="text-xl font-medium cursor-pointer"
                onClick={() => navigate(`/post/read?slug=গরমের-দিনে-যে-খাবার-খাওয়া-উচিৎ-এবং-যে-সকল-খাবার-গুলো-বর্জন-করা-উচিৎ`)}
              >
                গরমের দিনে যে খাবার খাওয়া উচিৎ এবং যে সকল খাবার গুলো বর্জন করা উচিৎ
              </h6>
              <div className="flex">
                <p>Bentil Shadrack</p>.
                <span>Oct 21 22</span>.
                <span> 5 min read</span>
              </div>
            </div>
          </div>
          <Button size="xs" color="error">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
  
  
};

export default ReadList;
