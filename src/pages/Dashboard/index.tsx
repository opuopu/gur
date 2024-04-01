import { Col, Row, Space } from "antd";
import ContestCard from "../../component/dashboard/ContestCard";
import IncomeChart from "../../component/dashboard/IncomeChart";
import Membership from "../../component/dashboard/MemberShip";
import DashboardUsers from "../../component/dashboard/DashboardUsers";
import DropDown from "../../component/UI/DropDown";
import { DownOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const items = [{ key: 1, label: 2023, value: 2023 }];
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={14}>
          <ContestCard />
          <div className="bg-white  justify-center   mt-4  rounded">
            <div className="px-2 flex items-center justify-between">
              <div>
                <h1 className="text-24 font-600">Member Ratio</h1>
                <div className="flex gap-x-2">
                  <div className="flex items-center gap-x-2">
                    <p className="h-[20px] w-[20px] bg-orange rounded-full"></p>
                    <p className="text-orange font-500 ">Premium</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="h-[20px] w-[20px] bg-black rounded-full"></p>
                    <p className="text-black font-500 ">Pro</p>
                  </div>
                </div>
              </div>
              <DropDown items={items}>
                <Space className="text-black font-500">
                  <p>Select Year</p>
                  <DownOutlined />
                </Space>
              </DropDown>
            </div>
            <IncomeChart />
          </div>
          <div className="mt-4">
            <Membership />
          </div>
        </Col>
        <Col span={10}>
          <div>
            <DashboardUsers />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
