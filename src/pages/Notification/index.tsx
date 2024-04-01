import { Row } from "antd";
import NotificationCard from "../../component/NotificationCom/NotificationCard";
import { notificationData } from "../../db/notificationData";
import GuruPagination from "../../component/UI/Pagination";

const Notification = () => {
  return (
    <div className="container mx-auto">
      <Row gutter={[16, 16]}>
        {notificationData.slice(0, 8).map((data, index) => (
          <NotificationCard key={index} data={data} />
        ))}
      </Row>
      <div className=" text-end mt-4">
        <GuruPagination total={notificationData?.length} />
      </div>
    </div>
  );
};

export default Notification;
