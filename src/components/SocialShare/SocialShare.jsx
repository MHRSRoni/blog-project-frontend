/* eslint-disable react/jsx-no-target-blank */
import { Card, Dropdown } from "keep-react";
import { DotsThreeVertical } from "phosphor-react";
import { successNotification } from "../../utilities/NotificationHelper";

const SocialShare = ({ slug }) => {
  const clipBoardCopy = () => {
    const url = `${location.origin}${location.pathname}?slug=${slug}`;
    navigator.clipboard.writeText(url);
    successNotification("Copy to Clipboard");
  };

  return (
    <Card.Title>
      <Dropdown
        id="social-drop-down"
        label={<DotsThreeVertical size={34} />}
        placement="top-start"
        type=""
        size="lg"
        dismissOnClick={true}
        arrowIcon={false}
        floatingArrow={true}
      >
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1 w-40">
            <p
              className="text-base font-normal text-slate-700"
              onClick={clipBoardCopy}
            >
              কপি লিংক{" "}
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1 w-40">
            <a
              href={`https://www.facebook.com/sharer.php?u=${location.href}`}
              target="_blank"
              className="text-base font-normal text-slate-700"
            >
              ফেসবুকে শেয়ার
            </a>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1 w-40">
            <a
              href={`https://twitter.com/intent/tweet?url=${location.href}`}
              target="_blank"
              className="text-base font-normal text-slate-700"
            >
              টুইটারে শেয়ার
            </a>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1 w-40">
            <p
              className="text-base font-normal text-slate-700 cursor-pointer"
              onClick={() => window.print()}
            >
              পেজটি প্রিন্ট করুন{" "}
            </p>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </Card.Title>
  );
};

export default SocialShare;
