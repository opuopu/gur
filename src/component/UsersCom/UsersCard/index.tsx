import { Col, Row } from "antd";
import { IoPeople, IoPeopleSharp } from "react-icons/io5";
import { GoPeople } from "react-icons/go";

const UsersCard = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <div className="flex items-center gap-2 justify-around bg-white p-4 rounded">
          <IoPeople
            className=" text-[#FD8533] "
            style={{
              fontSize: "36px",
            }}
          />
          <div>
            <h5 className="text-24 font-500">{500}</h5>
            <h5 className="text-24 font-600">Total Users</h5>
          </div>
        </div>
      </Col>
      <Col span={8}>
        <div className="flex items-center gap-2 justify-around bg-white p-4 rounded">
          <IoPeopleSharp
            className="text-[#FD8533] "
            style={{
              fontSize: "36px",
            }}
          />
          <div>
            <h5 className="text-24 font-500">{500}</h5>
            <h5 className="text-24 font-600">Active Users</h5>
          </div>
        </div>
      </Col>
      <Col span={8}>
        <div className="flex items-center gap-2 justify-around bg-white p-4 rounded">
          <GoPeople
            className=" text-[#FD8533] "
            style={{
              fontSize: "36px",
            }}
          />
          <div>
            <h5 className="text-24 font-500">{500}</h5>
            <h5 className="text-24 font-600">In Active Users</h5>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default UsersCard;
