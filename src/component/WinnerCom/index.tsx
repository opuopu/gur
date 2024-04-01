import { Col } from "antd";
import image from "../../assets/contest/product-image-one.webp";
import user from "../../assets/users/user.png";
const WinnerRank = ({ data }: { data: number }) => {
  return (
    <Col span={8}>
      <div className="relative">
        <h1 className="text-white text-24 absolute ps-2">#{data}</h1>
        <img src={image} className="h-[305px] rounded" alt="" />
        <div className="absolute bottom-1 left-5 flex items-center text-white gap-x-2 text-18 bg-black w-2/4 rounded-lg">
          <img
            src={user}
            width={40}
            className="rounded-full relative right-4 object-cover"
            alt=""
          />
          <p className="mr-auto relative right-1">Opu Vai</p>
        </div>
      </div>
    </Col>
  );
};

export default WinnerRank;
