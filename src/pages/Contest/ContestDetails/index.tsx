import { Button, Col, Divider, Row } from "antd";
import { singleContestDetails } from "../../../db/contestData";
import contestImage from "../../../assets/contest/image_00.png";
import dollarIcon from "../../../assets/contest/icon.png";
import ImageIcon from "../../../assets/contest/imageIcon.svg";
import { DeleteFilled, EditFilled, TrophyOutlined } from "@ant-design/icons";
import icon1 from "../../../assets/contest/detailsIcon/icon-1.png";
import icon2 from "../../../assets/contest/detailsIcon/icon-2.png";
import icon3 from "../../../assets/contest/detailsIcon/icon-3.png";
import icon4 from "../../../assets/contest/detailsIcon/icon-4.png";
import { NavLink } from "react-router-dom";
const ContestDetails = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <div className="flex gap-x-4  items-center">
            <div className="w-[500px] relative">
              <img src={contestImage} alt="" />
              <div className="absolute bottom-0 bg-black w-full p-2">
                <div className="flex justify-between items-center   ">
                  <div className="flex items-center gap-x-2 text-white font-600 ">
                    <img src={dollarIcon} alt="" />
                    <p>${singleContestDetails.price}</p>
                  </div>
                  <Divider type="vertical" className=" bg-orange h-100" />
                  <p className="text-white font-600">
                    {singleContestDetails.time}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-white w-80">
                <h1 className="text-24 font-600 mb-2"> Sunset Tree </h1>
                <p className="text-18 ">{singleContestDetails?.description}</p>
              </div>
            </div>
          </div>
          <Divider type="horizontal" className="bg-orange" />
          {/* details part */}
          <div className="flex items-start gap-x-4 ">
            <img src={ImageIcon} alt="" />
            <div>
              <h1 className="text-white font-600 text-24">Submission Rules</h1>
              <h5 className="text-orange text-20 font-600">Do not post</h5>
              {singleContestDetails?.rules?.map(
                (data: string, index: number) => (
                  <p className="text-white text-18 my-2">
                    {index}. {data}
                  </p>
                )
              )}
            </div>
          </div>
          <Divider type="horizontal" className="bg-orange" />
          <div className="flex justify-around">
            <NavLink to={`/edit-contest/${1}`}>
              <Button
                className="bg-orange border-0 h-8 font-600 px-8"
                icon={<EditFilled />}
              >
                Edit
              </Button>
            </NavLink>
            <Button
              className=" border text-white h-8 font-600 px-8"
              icon={<DeleteFilled />}
            >
              Edit
            </Button>
            <NavLink to={`/contest-winner/${1}`}>
              <Button
                className="  text-black bg-orange  border-0 h-8 font-600 px-8"
                icon={<TrophyOutlined />}
              >
                See Winner
              </Button>
            </NavLink>
          </div>
        </Col>
        <Col span={8} className="flex flex-col gap-y-6">
          <div>
            <div className="flex flex-col items-center mx-auto w-[200px] border border-orange rounded p-2">
              <img src={icon1} alt="" />
              <div className="flex gap-x-2 items-center text-white">
                <h1 className="text-18 font-600">
                  {singleContestDetails?.votes}
                </h1>
                <p>votes</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center mx-auto w-[200px] border border-orange rounded p-2">
              <img src={icon2} alt="" />
              <div className="flex gap-x-2 items-center text-white">
                <h1 className="text-18 font-600">
                  {singleContestDetails?.award}
                </h1>
                <p>awards</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center mx-auto w-[200px] border border-orange rounded p-2">
              <img src={icon3} alt="" />
              <div className="flex gap-x-2 items-center text-white">
                <h1 className="text-18 font-600">
                  {singleContestDetails?.views}
                </h1>
                <p>views</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center mx-auto w-[200px] border border-orange rounded p-2">
              <img src={icon4} alt="" />
              <div className="flex gap-x-2 items-center text-white">
                <h1 className="text-18 font-600">
                  {singleContestDetails?.participants}
                </h1>
                <p>participants</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContestDetails;
