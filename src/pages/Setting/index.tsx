import { Col, Row } from "antd";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Setting = () => {
  return (
    <div className="container mx-auto">
      <Row gutter={[0, 30]}>
        <Col span={24}>
          <div className="flex items-center justify-between text-20  text-white">
            <p className="">Notification</p>
            <NavLink to="/notification">
              <FaArrowRightToBracket cursor="pointer" />
            </NavLink>
          </div>
          <hr className="text-orange mt-4" />
        </Col>
        <Col span={24}>
          <div className="flex items-center justify-between text-20  text-white">
            <p className="">Change Password</p>
            <NavLink to="/change-password">
              <FaArrowRightToBracket cursor="pointer" />
            </NavLink>
          </div>
          <hr className="text-orange mt-4" />
        </Col>
        <Col span={24}>
          <div className="flex items-center justify-between text-20  text-white">
            <p className="">Privacy Policy</p>
            <NavLink to="/privacy-policy">
              <FaArrowRightToBracket cursor="pointer" />
            </NavLink>
          </div>
          <hr className="text-orange mt-4" />
        </Col>
        <Col span={24}>
          <div className="flex items-center justify-between text-20  text-white">
            <p className="">Terms And Condition</p>
            <NavLink to="/terms">
              <FaArrowRightToBracket cursor="pointer" />
            </NavLink>
          </div>
          <hr className="text-orange mt-4" />
        </Col>
        <Col span={24}>
          <div className="flex items-center justify-between text-20  text-white">
            <p className="">About Us</p>
            <NavLink to="/about">
              <FaArrowRightToBracket cursor="pointer" />
            </NavLink>
          </div>
          <hr className="text-orange mt-4" />
        </Col>
      </Row>
    </div>
  );
};

export default Setting;
