import { Row, Col } from "antd";
import { contestCardData } from "../../../db/contestCardData";
interface CardProps {
  image: string;
  total: number;
  text: string;
}
const ContestCard = () => {
  return (
    <Row gutter={[16, 16]} justify="space-between">
      {contestCardData?.map((data: CardProps, index: number) => (
        <Col key={index}>
          <div className="flex  items-center gap-2 bg-white p-4 rounded  ">
            <img src={data.image} alt="" />
            <div>
              <h5 className="text-20 font-500">{data.total}</h5>
              <h5 className="text-20 font-600">{data.text}</h5>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ContestCard;
