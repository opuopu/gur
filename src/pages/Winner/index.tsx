import { Col, Divider, Row } from "antd";
import contestImage from "./../../assets/contest/image_00.png";
import topPhotoGrapherIcon from "../../assets/contest/awardIcon/top-photograper.png";
import topPhotoIcon from "../../assets/contest/awardIcon/top-photo.png";
import ycpickIcon from "../../assets/contest/awardIcon/pick.png";
import anotherPhoto from "../../assets/contest/image 205.png";
import voteIcon from "../../assets/icon/vote.png";
import viewIcon from "../../assets/icon/vote.png";
import user from "../../assets/users/user.png";
import { winnerData } from "../../db/winnerData";
import WinnerRank from "../../component/WinnerCom";
const Winner = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col lg={12}>
          <section className="">
            <h1 className="text-orange text-20 text-center mb-4">
              TOP PHOTOGRAPHER WINNER
            </h1>
            {/* pa */}
            <div className="flex gap-x-4">
              {/* Left side */}
              <div className="w-[500px] relative flex flex-col">
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src={topPhotoGrapherIcon}
                  alt="Top Photographer"
                />
                <img src={contestImage} alt="" />

                <div className="absolute bottom-0 bg-black w-full px-4 py-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2 text-white font-600">
                      <img src={voteIcon} alt="" />
                      <p>50000</p>
                    </div>
                    <Divider type="vertical" className="bg-orange h-100" />
                    <div className="flex items-center gap-x-2 text-white font-600">
                      <img src={viewIcon} alt="" />
                      <p>50000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="flex items-center relative gap-x-2 rounded">
                  <img
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                    src={user}
                    alt=""
                  />
                  <p className="text-white text-20">Benjamin Chen</p>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-grow">
                  {[1, 2, 3, 4].map((data, index) => (
                    <img
                      src={anotherPhoto}
                      className="rounded"
                      width={130}
                      height={200}
                      key={index}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* section 2 */}
          <section className="my-4">
            <h1 className="text-orange text-20 text-center mb-4">
              TOP PHOTO WINNER
            </h1>
            {/* pa */}
            <div className="flex gap-x-4">
              {/* Left side */}
              <div className="w-[500px] relative flex flex-col">
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src={topPhotoIcon}
                  alt="Top Photographer"
                />
                <img src={contestImage} alt="" />

                <div className="absolute bottom-0 bg-black w-full px-4 py-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2 text-white font-600">
                      <img src={voteIcon} alt="" />
                      <p>50000</p>
                    </div>
                    <Divider type="vertical" className="bg-orange h-100" />
                    <div className="flex items-center gap-x-2 text-white font-600">
                      <img src={viewIcon} alt="" />
                      <p>50000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="flex items-center relative gap-x-2 rounded">
                  <img
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                    src={user}
                    alt=""
                  />
                  <p className="text-white text-20">Benjamin Chen</p>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-grow">
                  {[1, 2, 3, 4].map((data, index) => (
                    <img
                      src={anotherPhoto}
                      className="rounded"
                      width={130}
                      height={200}
                      key={index}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <h1 className="text-orange text-20 text-center mb-4">
              YC TOP PHOTO PICK WINNER
            </h1>
            {/* pa */}
            <div className="flex gap-x-4">
              {/* Left side */}
              <div className="w-[500px] relative flex flex-col">
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src={ycpickIcon}
                  alt="Top Photographer"
                />
                <img src={contestImage} alt="" />

                <div className="absolute bottom-0 bg-black w-full px-4 py-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2 text-white font-600">
                      <img src={voteIcon} alt="" />
                      <p>50000</p>
                    </div>
                    <Divider type="vertical" className="bg-orange h-100" />
                    <div className="flex items-center gap-x-2 text-white font-600">
                      <img src={viewIcon} alt="" />
                      <p>50000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="flex items-center relative gap-x-2 rounded">
                  <img
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                    src={user}
                    alt=""
                  />
                  <p className="text-white text-20">Benjamin Chen</p>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-grow">
                  {[1, 2, 3, 4].map((data, index) => (
                    <img
                      src={anotherPhoto}
                      className="rounded"
                      width={130}
                      height={200}
                      key={index}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Col>
        <Col lg={12}>
          <h1 className="text-orange text-20   text-center mb-4">
            OTHERS RANK
          </h1>
          <Row gutter={[16, 16]}>
            {winnerData.map((data: number, index: number) => (
              <WinnerRank data={data} key={index} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Winner;
