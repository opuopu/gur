import { Col, Row, Space } from "antd";
import WalletPieChart from "../../component/WalletCom/WalletPieChart";
import DropDown from "../../component/UI/DropDown";
import IncomeCard from "../../component/WalletCom/IncomeCard";
import WalletIncomeChart from "../../component/WalletCom/WalletIncomeChart";
import WalletIncomeTable from "../../component/WalletCom/WalletUserTable";
import { DownOutlined } from "@ant-design/icons";

const Wallet = () => {
  const items = [{ key: 1, label: "January", value: "January" }];
  const yearItems = [{ key: 1, label: 2024, value: 2024 }];
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={14}>
          <div>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <div>
                  <div className="bg-black  p-4">
                    <div className="flex justify-between items-center">
                      <h1 className="text-20 text-white font-500 ">
                        Total Income
                      </h1>

                      <DropDown items={items}>
                        <Space className="text-white font-500">
                          <p>Select Month</p>
                          <DownOutlined />
                        </Space>
                      </DropDown>
                    </div>
                    <WalletPieChart />
                    <div className="flex justify-around">
                      <div className="flex gap-x-4  text-white">
                        <div className="h-[20px] w-[20px] rounded-full bg-orange"></div>
                        <p>
                          Premium <span>50%</span>
                        </p>
                      </div>
                      <div className="flex gap-x-4  text-white">
                        <div className="h-[20px] w-[20px] rounded-full bg-white"></div>
                        <p>
                          Premium <span>50%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <IncomeCard />
              </Col>
            </Row>
          </div>
          <div className="bg-black  p-4 mt-4">
            <div className="flex items-center justify-between  pb-4">
              <h1 className="text-white text-20 font-500  ">Total Income</h1>
              <div className="flex gap-x-4  text-white">
                <div className="h-[20px] w-[20px] rounded-full bg-orange"></div>
                <p>
                  Premium <span>50%</span>
                </p>
              </div>
              <div className="flex gap-x-4  text-white">
                <div className="h-[20px] w-[20px] rounded-full bg-white"></div>
                <p>
                  Premium <span>50%</span>
                </p>
              </div>

              <DropDown items={yearItems}>
                <Space className="text-white font-500">
                  <p>Select Year</p>
                  <DownOutlined />
                </Space>
              </DropDown>
            </div>
            <WalletIncomeChart />
          </div>
        </Col>
        <Col span={10}>
          <WalletIncomeTable />
        </Col>
      </Row>
    </div>
  );
};

export default Wallet;
