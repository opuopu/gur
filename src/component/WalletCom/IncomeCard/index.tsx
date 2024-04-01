import { Col, Row } from "antd";
import premium from "../../../assets/icon/premium.png";
import pro from "../../../assets/icon/pro.png";
const IncomeCard = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <div className="bg-black p-4 ">
          <h1 className="text-white text-center text-20 font-500">
            Premium Members Income
          </h1>
          <div className="flex justify-around mt-2">
            <img className="object-cover" src={premium} alt="" />
            <h1 className="text-[70px] font-600 text-orange ">50k</h1>
          </div>
        </div>
      </Col>
      <Col span={24}>
        <div className="bg-black p-4 ">
          <h1 className="text-white text-center text-20 font-500">
            Pro Members Income
          </h1>
          <div className="flex justify-around mt-2">
            <img className="object-cover" src={pro} alt="" />
            <h1 className="text-[70px] font-600 text-white ">50k</h1>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default IncomeCard;
