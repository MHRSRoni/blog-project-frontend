import { Card, Dropdown } from "keep-react";
import { DotsThreeVertical } from "phosphor-react";

const SocialShare = () => {
  return (
    <Card.Title>
      <Dropdown
        id="social-drop-down"
        label={<DotsThreeVertical size={34} />}
        placement="bottom-end"
        type=""
        size="lg"
        dismissOnClick={true}
        arrowIcon={false}
        floatingArrow={true}
      >
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1 w-40">
            <p className="text-base font-semibold text-slate-700">Copy Link</p>
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
