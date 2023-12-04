<<<<<<< HEAD
import { Card, Dropdown } from "keep-react";
import { DotsThreeVertical } from "phosphor-react";

const SocialShare = () => {
=======
/* eslint-disable react/jsx-no-target-blank */
import { Card, Dropdown } from "keep-react";
import { DotsThreeVertical } from "phosphor-react";
import { successNotification } from "../../utilities/NotificationHelper";

const SocialShare = () => {
  // Get the slug from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const slug = queryParams.get("slug");

  const clipBoardCopy = () => {
    const url = `${location.origin}${location.pathname}?slug=${slug}`;
    navigator.clipboard.writeText(url);
    successNotification("Copy to Clipboard");
  };

>>>>>>> b6c12142a0e7b3637b2d6a10878aa53d5bc633e6
  return (
    <Card.Title>
      <Dropdown
        id="social-drop-down"
        label={<DotsThreeVertical size={34} />}
<<<<<<< HEAD
        placement="bottom-end"
=======
        placement="top-start"
>>>>>>> b6c12142a0e7b3637b2d6a10878aa53d5bc633e6
        type=""
        size="lg"
        dismissOnClick={true}
        arrowIcon={false}
        floatingArrow={true}
      >
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1 w-40">
<<<<<<< HEAD
            <p className="text-base font-semibold text-slate-700">Copy Link</p>
=======
            <p
              className="text-base font-semibold text-slate-700"
              onClick={clipBoardCopy}
            >
              Copy Link
            </p>
>>>>>>> b6c12142a0e7b3637b2d6a10878aa53d5bc633e6
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1 w-40">
<<<<<<< HEAD
            <p className="text-base font-semibold text-slate-700">
              Share to Facebook
            </p>
=======
            <a
              href={`https://www.facebook.com/sharer.php?u=${location.href}`}
              target="_blank"
              className="text-base font-semibold text-slate-700"
            >
              Share to Facebook
            </a>
>>>>>>> b6c12142a0e7b3637b2d6a10878aa53d5bc633e6
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1 w-40">
            <p className="text-base font-semibold text-slate-700">
              Share to Facebook
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1 w-40">
            <p className="text-base font-semibold text-slate-700">
              Share to Facebook
            </p>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </Card.Title>
  );
};

export default SocialShare;
