import { Col } from "antd";
import { IoNotificationsCircleOutline } from "react-icons/io5";

/* eslint-disable @typescript-eslint/no-explicit-any */
const NotificationCard = ({ data }: any) => {
  return (
    <Col span={24}>
      <div className="flex gap-x-2 text-20 text-white pb-2">
        <IoNotificationsCircleOutline style={{ fontSize: "40px" }} />

        <div>
          <h1>{data?.title}</h1>
          <p>{data?.date}</p>
        </div>
      </div>
      <hr className="text-orange " />
    </Col>
  );
};

export default NotificationCard;
